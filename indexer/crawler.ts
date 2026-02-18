import puppeteer, { Browser } from "puppeteer";
import mongoose from "mongoose";
import { Heap } from "heap-js";

mongoose.connect("mongodb://localhost/quaeritodb");

const ignoredExtensions =
	/\.(jpg|jpeg|png|gif|pdf|zip|css|js|mp4|svg|ico|json|xml)$/i;

const weightDepth = 5;
const weightDomainRepeat = 6;

interface PageData {
	url: string;
	content: string;
	links: string[];
}

interface ToQueue {
	url: string;
	score: number;
}

const pageDataSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const PageDataModel = mongoose.model("PageData", pageDataSchema);

class Crawler {
	private browser: Browser | null = null;
	private visited: Set<string> = new Set();
	private queue = new Heap((a: ToQueue, b: ToQueue) => a.score - b.score);
	private domainCounts: Map<string, number> = new Map();

	constructor(startUrl: string) {
		this.queue.add({ url: startUrl, score: 0 });
	}

	async init() {
		this.browser = await puppeteer.launch();
		console.info("Initializing browser");

		try {
			const visitedUrls = await PageDataModel.distinct("url");
			for (const visitedUrl of visitedUrls) {
				this.visited.add(visitedUrl);

				const domain = new URL(visitedUrl).hostname;
				const savedDomain = this.domainCounts.get(domain);
				this.domainCounts.set(domain, (savedDomain || 0) + 1);
			}

			console.info("Visited and domainCounts loaded");
			// console.info(
			// 	`Visited URLs (${this.visited.size}):`,
			// 	Array.from(this.visited),
			// );
			// console.info(`Domain counts:`, Object.fromEntries(this.domainCounts));
		} catch (error) {
			console.error("Error loading visited and domainCounts " + error);
		}
	}

	async close() {
		if (this.browser) await this.browser.close();
		console.info("Closing browser");
	}

	private sanitizeUrl(rawUrl: string, baseUrl: string): string | null {
		try {
			const url = new URL(rawUrl, baseUrl);

			if (!url.protocol.startsWith("http")) return null;

			url.hash = "";

			if (url.pathname.endsWith("/") && url.pathname.length > 1) {
				url.pathname = url.pathname.slice(0, -1);
			}

			if (ignoredExtensions.test(url.pathname)) return null;

			const segments = url.pathname.split("/").filter(Boolean);
			if (segments.length > new Set(segments).size + 2) return null;

			if (this.visited.has(url.href)) return null;

			return url.href;
		} catch {
			return null;
		}
	}

	private calculateScore(url: string): number {
		const domain = new URL(url).hostname;

		const pathDepth = url.split("/").length - 3;
		const depthPenalty = Math.log(Math.max(1, pathDepth)) * weightDepth;

		const domainCount = this.domainCounts.get(domain) || 0;
		const domainPenalty =
			Math.log(Math.max(1, domainCount)) * weightDomainRepeat;

		return depthPenalty + domainPenalty;
	}

	private async processPage(url: string): Promise<PageData | null> {
		if (!this.browser) throw new Error("Browser not initialized!");
		const page = await this.browser.newPage();

		try {
			console.info({ state: "➡️", url: url });

			await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

			const content = await page.content();

			const rawLinks = await page.$$eval("a[href]", (elements) =>
				elements.map((a) => a.href),
			);

			await page.close();

			const validLinks: string[] = [];
			for (const rawLink of rawLinks) {
				const sanitized = this.sanitizeUrl(rawLink, url);
				if (sanitized === null) continue;
				validLinks.push(sanitized);
			}

			console.info({
				state: "🟢",
				url: url,
				queueLength: this.queue.length,
				visitedLength: this.visited.size,
				linksFound: validLinks.length,
			});
			return { url, content, links: validLinks };
		} catch (error) {
			console.error({
				state: "🔴",
				url,
				error,
			});
			await page.close();
			return null;
		}
	}

	async start() {
		await this.init();

		while (this.queue.size() > 0) {
			const { url: currentUrl } = this.queue.pop()!;

			if (!currentUrl || this.visited.has(currentUrl)) continue;

			this.visited.add(currentUrl);
			const domain = new URL(currentUrl).hostname;
			const savedDomain = this.domainCounts.get(domain);
			this.domainCounts.set(domain, (savedDomain || 0) + 1);

			const pageData = await this.processPage(currentUrl);

			if (pageData) {
				await PageDataModel.create({
					url: pageData.url,
					content: pageData.content,
				});

				for (const link of pageData.links) {
					if (!this.visited.has(link)) {
						const score = this.calculateScore(link);
						this.queue.add({ url: link, score });
					}
				}
			}

			await new Promise((r) => setTimeout(r, 100));
		}

		await this.close();
	}
}

(async () => {
	const startUrl =
		"https://www.sablik.eu/ma-tvorba/slechta-a-kardinalove/slechta-a-kardinalove-2-dil";

	const crawler = new Crawler(startUrl);
	await crawler.start();
})();

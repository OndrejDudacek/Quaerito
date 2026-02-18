import puppeteer, { Browser } from "puppeteer";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/quaeritodb");

const ignoredExtensions =
	/\.(jpg|jpeg|png|gif|pdf|zip|css|js|mp4|svg|ico|json|xml)$/i;

interface PageData {
	url: string;
	content: string;
	links: string[];
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
	private queue: string[] = [];

	constructor(startUrl: string) {
		this.queue.push(startUrl);
	}

	async init() {
		this.browser = await puppeteer.launch();
		console.info("Initializing browser");

		try {
			const visitedUrls = await PageDataModel.distinct("url");
			for (const visitedUrl of visitedUrls) {
				this.visited.add(visitedUrl);
			}

			console.info("Visited loaded");
		} catch (error) {
			console.error("Error loading visited " + error);
		}
	}

	async close() {
		if (this.browser) await this.browser.close();
		console.info("Closing browser");
	}

	private sanitizeUrl(rawUrl: string, baseUrl: string): string | null {
		try {
			const url = new URL(rawUrl, baseUrl);
			url.hash = "";

			if (ignoredExtensions.test(url.pathname)) return null;

			const segments = url.pathname.split("/").filter(Boolean);
			if (segments.length > new Set(segments).size + 2) return null;

			if (this.visited.has(url.href)) return null;

			return url.href;
		} catch {
			return null;
		}
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
				validLinks,
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
		while (this.queue.length > 0) {
			const currentUrl = this.queue.shift();

			if (!currentUrl || this.visited.has(currentUrl)) continue;

			this.visited.add(currentUrl);

			const pageData = await this.processPage(currentUrl);

			if (pageData) {
				await PageDataModel.create({
					url: pageData.url,
					content: pageData.content,
				});

				for (const link of pageData.links) {
					if (!this.visited.has(link)) {
						this.queue.push(link);
					}
				}
			}

			await new Promise((r) => setTimeout(r, 1000));
		}

		await this.close();
	}
}

(async () => {
	const startUrl = "https://ssps.cz";

	const crawler = new Crawler(startUrl);
	await crawler.start();
})();

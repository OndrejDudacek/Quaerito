import puppeteer, { Browser } from "puppeteer";
import mongoose from "mongoose";
import { Heap } from "heap-js";

mongoose.connect("mongodb://localhost/quaeritodb");

const ignoredExtensions =
	/\.(jpg|jpeg|png|gif|pdf|zip|css|js|mp4|svg|ico|json|xml)$/i;

const weightDepth = 5;
const weightDomainRepeat = 8;
const czDomain = 0.8;

interface PageData {
	url: string;
	content: string;
	links: string[];
}

export type PageDataToDb = Omit<PageData, "links">;

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

const domainCountSchema = new mongoose.Schema({
	domain: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	count: {
		type: Number,
		required: true,
	},
});

export const PageDataModel = mongoose.model("PageData", pageDataSchema);
const DomainCountModel = mongoose.model("DomainCount", domainCountSchema);

export class Crawler {
	private browser: Browser | null = null;
	private queue = new Heap((a: ToQueue, b: ToQueue) => a.score - b.score);

	constructor(startUrl: string) {
		this.queue.add({ url: startUrl, score: 0 });
	}

	private async visited(url: string): Promise<boolean> {
		const find = await PageDataModel.find({ url });
		return find.length > 0;
	}

	async init() {
		this.browser = await puppeteer.launch();
		console.info("Initializing browser");
	}

	async close() {
		if (this.browser) await this.browser.close();
		console.info("Closing browser");
	}

	private async sanitizeUrl(
		rawUrl: string,
		baseUrl: string,
	): Promise<string | null> {
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

			if (await this.visited(url.href)) return null;

			return url.href;
		} catch {
			return null;
		}
	}

	private async calculateScore(url: string): Promise<number> {
		const domain = new URL(url).hostname;

		const pathDepth = url.split("/").length - 3;
		const depthPenalty = Math.log(Math.max(1, pathDepth)) * weightDepth;

		const domainDoc = await DomainCountModel.findOne({ domain });
		const count = domainDoc?.count || 0;
		let czDomainBonus = 1;
		if (domain.match(/\.cz$/i)) czDomainBonus = czDomain;
		const domainPenalty =
			Math.log(Math.max(1, count)) * weightDomainRepeat * czDomainBonus;

		return depthPenalty + domainPenalty;
	}

	private async processPage(url: string): Promise<PageData | null> {
		if (!this.browser) throw new Error("Browser not initialized!");
		const page = await this.browser.newPage();
		await page.setExtraHTTPHeaders({
			"Accept-Language": "cs",
		});

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
				const sanitized = await this.sanitizeUrl(rawLink, url);
				if (sanitized === null) continue;
				validLinks.push(sanitized);
			}

			console.log({
				state: "🟢",
				url: url,
				queueLength: this.queue.length,
				visitedLength: (await PageDataModel.find().distinct("url")).length,
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

			if (!currentUrl || (await this.visited(currentUrl))) continue;

			const domain = new URL(currentUrl).hostname;

			await DomainCountModel.updateOne(
				{ domain },
				{ $inc: { count: 1 } },
				{ upsert: true },
			);

			const pageData = await this.processPage(currentUrl);

			if (pageData) {
				await PageDataModel.create({
					url: pageData.url,
					content: pageData.content,
				});

				for (const link of pageData.links) {
					if (!(await this.visited(link))) {
						const score = await this.calculateScore(link);
						this.queue.add({ url: link, score });
					}
				}
			}

			await new Promise((r) => setTimeout(r, 100));
		}

		await this.close();
	}
}

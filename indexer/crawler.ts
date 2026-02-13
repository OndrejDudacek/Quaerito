import puppeteer, { Browser, Page } from "puppeteer";

const ignoredExtensions =
	/\.(jpg|jpeg|png|gif|pdf|zip|css|js|mp4|svg|ico|json|xml)$/i;

interface PageData {
	url: string;
	content: string;
	links: string[];
}

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
			console.info("Starting processing of " + url);

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

			return { url, content, links: validLinks };
		} catch (error) {
			console.error(`Error processing ${url}:`, error);
			await page.close();
			return null;
		}
	}
}

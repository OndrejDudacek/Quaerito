import { url } from "node:inspector";
import puppeteer from "puppeteer";

const browser = await puppeteer.launch();
const page = await browser.newPage();

const ignorExtensions =
	/\.(jpg|jpeg|png|gif|pdf|zip|css|js|mp4|svg|ico|json|xml)$/i;
const sanitazeUrl = (rawUrl: string, baseUrl: string): string | null => {
	try {
		const url = new URL(rawUrl, baseUrl);
		url.hash = "";

		if (ignorExtensions.test(url.pathname)) {
			return null;
		}

		const segments = url.pathname.split("/").filter(Boolean);
		const uniqueSegments = new Set(segments);
		if (segments.length > uniqueSegments.size + 2) {
			return null;
		}

		//TODO: check, jestli už nebyla projitá

		return url.href;
	} catch {
		return null;
	}
};

const readRobotsTxt = async (url: string) => {
	const match = url.match(/^https?:\/\/[^\/]+\//);
	const urlFirsPart = match ? match[0] : null;
	page.goto(urlFirsPart + "robots.txt");
	await page.waitForNetworkIdle();
	return page.content();
};

const readPageAndExtractLinks = async (url: string) => {
	page.goto(url);
	await page.waitForNetworkIdle();
	const links: string[] = await page.$$eval("a[href]", (links) => {
		return links.map((a) => a.href);
	});
	const content = await page.content();

	return { links, content };
};

const startPage =
	"https://cs.wikipedia.org/wiki/Sm%C3%ADchovsk%C3%A1_st%C5%99edn%C3%AD_pr%C5%AFmyslov%C3%A1_%C5%A1kola,_gymn%C3%A1zium_a_Hotelov%C3%A1_%C5%A1kola_Radlick%C3%A1";

const { links } = await readPageAndExtractLinks(startPage);
console.log(links);

browser.close();

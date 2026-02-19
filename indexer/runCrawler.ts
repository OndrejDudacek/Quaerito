import { Crawler } from "./crawler.ts";

(async () => {
	const startUrl = "https://alza.cz";

	const crawler = new Crawler(startUrl);
	await crawler.start();
})();

import { Crawler } from "./crawler.ts";

(async () => {
	const startUrl = "https://cvut.cz";

	const crawler = new Crawler(startUrl);
	await crawler.start();
})();

import { Crawler } from "./crawler.ts";

(async () => {
	const startUrl = process.argv[2];
	console.log("Startign on " + startUrl);

	const crawler = new Crawler(startUrl);
	await crawler.start();
})();

import { Indexer } from "./indexer.ts";

(async () => {
	const indexer = new Indexer();
	// await indexer.startIndexing();
	await indexer.startVectorization();
})();

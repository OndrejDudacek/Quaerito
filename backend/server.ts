import express, { type Request, type Response } from "express";
import * as sw from "stopword";
import snowballFactory from "snowball-stemmers";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const urlsOnPage = 10;

await mongoose.connect("mongodb://localhost/quaeritodb");

const vectorSchema = new mongoose.Schema({
	url: { type: String, required: true, unique: true, index: true },
	vector: { type: Map, of: Number, required: true },
	vectorSize: { type: Number, required: true },
});

const VectorModel = mongoose.model("Vector", vectorSchema);

const stopWords = new Set(sw.ces);
const stemmer = snowballFactory.newStemmer("czech");
let allVectors: Array<{
	url: string;
	vector: Map<string, number>;
	vectorSize: number;
}> = [];

app.get("/search", (req: Request, res: Response) => {
	const startTime = Date.now();
	const query = req.query.q;
	const page = Number(req.query.page || 0);

	if (query === undefined) return res.status(400).send("Empty or no query.");

	const textArr = String(query)
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, " ")
		.split(" ")
		.map((w) => {
			if (stopWords.has(w)) return "";
			return stemmer.stem(w);
		})
		.filter(Boolean);

	if (textArr.length === 0)
		return res.status(400).send("Empty query after parsing.");

	const wordCount = new Map<string, number>();
	for (const word of textArr) {
		wordCount.set(word, (wordCount.get(word) || 0) + 1);
	}

	const totalWords = textArr.length;

	const queryVector = new Map<string, number>();
	for (const wordEntry of wordCount) {
		const word = wordEntry[0];
		const count = wordEntry[1];

		queryVector.set(word, count / totalWords);
	}

	let queryVectorSize = 0;
	for (const val of queryVector.values()) {
		queryVectorSize += val * val;
	}
	queryVectorSize = Math.sqrt(queryVectorSize);

	const results: { url: string; cosineSim: number }[] = [];

	for (const doc of allVectors) {
		const docVector = doc.vector;
		const docVectorSize = doc.vectorSize;

		if (!docVector || !docVectorSize) continue;

		let dotProduct = 0;

		for (const [word, tf] of queryVector) {
			if (docVector.has(word)) {
				dotProduct += tf * (queryVector.get(word) || 0);
			}
		}

		const cosineSim = dotProduct / (queryVectorSize * docVectorSize);

		if (cosineSim > 0) {
			results.push({ url: doc.url, cosineSim });
		}
	}

	results.sort((a, b) => b.cosineSim - a.cosineSim);

	res.json({
		duration: ((Date.now() - startTime) / 1000).toFixed(2),
		resultsCount: results.length,
		results: results.slice(page * urlsOnPage, (page + 1) * urlsOnPage),
	});
});

app.listen(3333, async () => {
	console.log(`Example app listening on port ${3333}`);
	allVectors = await VectorModel.find();
});

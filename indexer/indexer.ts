import mongoose from "mongoose";
import { PageDataModel, type PageDataToDb } from "./crawler.ts";
import * as cheerio from "cheerio";
import snowballFactory from "snowball-stemmers";
import * as sw from "stopword";

mongoose.connect("mongodb://localhost/quaeritodb");

interface PageIndex {
	url: string;
	words: Map<string, number>;
}

const pageIndexSchema = new mongoose.Schema(
	{
		url: { type: String, required: true, unique: true, index: true },
		words: { type: Map, of: Number, required: true },
	},
	{ timestamps: true },
);

const wordAppearanceSchema = new mongoose.Schema({
	word: { type: String, required: true, unique: true, index: true },
	urls: { type: [String], required: true, default: [] },
});

const vectorSchema = new mongoose.Schema({
	url: { type: String, required: true, unique: true, index: true },
	vector: { type: Map, of: Number, required: true },
	vectorSize: { type: Number, required: true },
});

const PageIndexModel = mongoose.model("PageIndex", pageIndexSchema);
const WordAppearanceModel = mongoose.model(
	"WordAppearance",
	wordAppearanceSchema,
);
export const VectorModel = mongoose.model("Vector", vectorSchema);

export class Indexer {
	private stopWords = new Set(sw.ces);
	private stemmer = snowballFactory.newStemmer("czech");

	private async indexPage(pageData: PageDataToDb) {
		try {
			const $ = cheerio.load(pageData.content);
			$("script, style, noscript").remove();
			const textArr = $.text()
				.trim()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.toLowerCase()
				.replace(/[^\p{L}\p{N}]+/gu, " ")
				.split(" ")
				.map((w) => {
					if (this.stopWords.has(w)) return "";
					return this.stemmer.stem(w);
				})
				.filter(Boolean);

			if (textArr.length === 0) {
				console.info({
					state: "I🟠 no text",
					url: pageData.url,
				});
				return;
			}

			const index: PageIndex = {
				url: pageData.url,
				words: new Map<string, number>(),
			};

			for (const w of textArr) {
				const currentCount = index.words.get(w) || 0;
				index.words.set(w, currentCount + 1);
			}

			const bulkOps = Array.from(index.words.entries()).map(([word]) => ({
				updateOne: {
					filter: { word: word },
					update: { $addToSet: { urls: pageData.url } },
					upsert: true,
				},
			}));

			if (bulkOps.length > 0) {
				await WordAppearanceModel.bulkWrite(bulkOps);
			}

			const totalWords = textArr.length;
			for (const word of index.words) {
				index.words.set(word[0], word[1] / totalWords);
			}

			await PageIndexModel.create({
				url: pageData.url,
				words: Object.fromEntries(index.words),
			});

			console.log({
				state: "I🟢",
				url: pageData.url,
			});
		} catch (err) {
			console.error({
				state: "I🔴",
				url: pageData.url,
				error: "Chyba v indexování stránky" + err,
			});
		}
	}

	private async createVector(pageIndex: PageIndex, pagesCount: number) {
		try {
			const words = pageIndex.words as unknown as Record<string, number>;
			const vector = new Map<string, number>();

			for (const wordEntry of Object.entries(words)) {
				const wordDoc = await WordAppearanceModel.findOne({
					word: wordEntry[0],
				});
				const pagesWithWordCount = wordDoc?.urls.length ?? 0;

				const idf = Math.log(pagesCount / pagesWithWordCount);
				const tf = wordEntry[1];
				const tfidf = tf * idf;

				vector.set(wordEntry[0], tfidf);
			}

			let sumOfSquaredValues = 0;
			for (const tfidf of vector.values()) {
				sumOfSquaredValues += tfidf * tfidf;
			}

			const vectorSize = Math.sqrt(sumOfSquaredValues);

			await VectorModel.updateOne(
				{ url: pageIndex.url },
				{
					$set: {
						url: pageIndex.url,
						vector: Object.fromEntries(vector),
						vectorSize,
					},
				},
				{ upsert: true },
			);

			console.log({
				state: "V🟢",
				url: pageIndex.url,
			});
		} catch (err) {
			console.error({
				state: "V🔴",
				url: pageIndex.url,
				error: "Chyba ve vektorizaci stránky" + err,
			});
		}
	}

	async startVectorization() {
		const cursor = PageIndexModel.aggregate([
			{ $sample: { size: 1000000 } },
		]).cursor();

		const pagesCount = await PageDataModel.countDocuments();

		for await (const data of cursor) {
			const url = data.url;
			console.info({
				state: "V➡️",
				url: url,
			});

			const foundIndex = await VectorModel.findOne({ url });
			if (foundIndex !== null) {
				// console.info({
				// 	state: "V🌕 vector already created",
				// 	url: url,
				// });
				continue;
			}

			await this.createVector(data, pagesCount);
		}

		console.info("Vectorization DONE " + (await VectorModel.countDocuments()));
	}

	async startIndexing() {
		const cursor = PageDataModel.aggregate([
			{ $sample: { size: 1000000 } },
		]).cursor();

		for await (const data of cursor) {
			const url = data.url;
			console.info({
				state: "I➡️",
				url: url,
			});

			const foundIndex = await PageIndexModel.findOne({ url });
			if (foundIndex !== null) {
				// console.info({
				// 	state: "I🌕 already indexed",
				// 	url: url,
				// });
				continue;
			}

			await this.indexPage(data);
		}

		console.info("Idexing DONE " + (await PageIndexModel.countDocuments()));
	}
}

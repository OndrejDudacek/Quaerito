import mongoose from "mongoose";
import { PageDataModel, type PageDataToDb } from "./crawler.ts";
import * as cheerio from "cheerio";
import snowballFactory, { newStemmer } from "snowball-stemmers";
import * as sw from "stopword";

mongoose.connect("mongodb://localhost/quaeritodb");

interface PageIndex {
	url: string;
	words: Map<string, number>; // Change this interface to use Map
}

const pageIndexSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		words: {
			type: Map,
			of: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

const wordCountSchema = new mongoose.Schema({
	word: {
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

const PageIndexModel = mongoose.model("PageIndex", pageIndexSchema);
const WordCountModel = mongoose.model("WordCount", wordCountSchema);

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
					state: "🟠 no text",
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

			const bulkOps = Array.from(index.words.entries()).map(
				([word, count]) => ({
					updateOne: {
						filter: { word: word },
						update: { $inc: { count: count } }, // Add local count to global count
						upsert: true,
					},
				}),
			);

			if (bulkOps.length > 0) {
				await WordCountModel.bulkWrite(bulkOps);
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
				state: "🟢",
				url: pageData.url,
			});
		} catch (err) {
			console.error({
				state: "🔴",
				url: pageData.url,
				error: "Chyba v indexování stránky" + err,
			});
		}
	}

	async start() {
		const cursor = PageDataModel.aggregate([
			{ $sample: { size: 1000000 } },
		]).cursor();

		for await (const data of cursor) {
			const url = data.url;
			console.info({
				state: "➡️",
				url: url,
			});

			const foundIndex = await PageIndexModel.findOne({ url });
			if (foundIndex !== null) {
				console.info({
					state: "🌕 already indexed",
					url: url,
				});
				continue;
			}

			await this.indexPage(data);
		}
	}
}

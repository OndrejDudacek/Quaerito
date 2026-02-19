import mongoose from "mongoose";
import { PageDataModel, type PageDataToDb } from "./crawler.ts";
import * as cheerio from "cheerio";
import snowballFactory from "snowball-stemmers";
import * as sw from "stopword";

mongoose.connect("mongodb://localhost/quaeritodb");

interface PageIndex {
	url: string;
	words: {
		[word: string]: number;
	};
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

const PageIndexModel = mongoose.model("PageIndex", pageIndexSchema);

const weights = {
	title: 10,
	h1: 8,
	h2: 4,
	h3: 4,
	h4: 3,
	h5: 3,
	h6: 3,
	description: 5,
	keywords: 2,
	text: 1,
};

export class Indexer {
	private indexed: Set<string> = new Set();
	private queue: PageDataToDb[] = [];

	constructor() {}

	async init() {
		try {
			const index = await PageIndexModel.distinct("url");
			this.indexed = new Set(index);

			console.info(`Already indexed: ${this.indexed.size} pages`);
		} catch (error) {
			console.error("Error loading indexed " + error);
		}
	}

	private parseText(
		text: string,
		stemmer: snowballFactory.Stemmer | null,
		stopWords: Set<string> | null = null,
	) {
		const arr =
			text
				.trim()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "")
				.toLowerCase()
				.match(/[a-z0-9]+/g) || [];

		const result: Record<string, number> = {};

		for (const word of arr) {
			if (stopWords && stopWords.has(word)) continue;
			const stemmed = stemmer ? stemmer.stem(word) : word;
			result[stemmed] = (result[stemmed] || 0) + 1;
		}

		return result;
	}

	private extractAndParse(
		$: cheerio.CheerioAPI,
		selector: string,
		stemmer: snowballFactory.Stemmer | null,
		stopWords: Set<string> | null,
		attribute?: string,
	): Record<string, number> {
		const text = attribute
			? $(selector).attr(attribute) || ""
			: $(selector).text();
		return this.parseText(text, stemmer, stopWords);
	}

	private detectLanguage($: cheerio.CheerioAPI): string {
		return (
			$("html").attr("lang") ||
			$('meta[http-equiv="content-language"]').attr("content") ||
			$('meta[property="og:locale"]').attr("content")?.split("_")[0] ||
			"en"
		);
	}

	async processPageData(data: PageDataToDb) {
		const pageIndex: PageIndex = {
			url: data.url,
			words: {},
		};

		try {
			const $ = cheerio.load(data.content);

			const lang = this.detectLanguage($);
			let stemmer: snowballFactory.Stemmer | null = null;
			let stopWords: Set<string> | null = null;
			switch (lang) {
				case "cs":
					stemmer = snowballFactory.newStemmer("czech");
					stopWords = new Set(sw.ces);
					break;
				case "en":
					stemmer = snowballFactory.newStemmer("english");
					stopWords = new Set(sw.eng);
					break;
				case "de":
					stemmer = snowballFactory.newStemmer("german");
					stopWords = new Set(sw.deu);
					break;
				case "fr":
					stemmer = snowballFactory.newStemmer("french");
					stopWords = new Set(sw.fra);
					break;
				case "es":
					stemmer = snowballFactory.newStemmer("spanish");
					stopWords = new Set(sw.spa);
					break;
				default:
					stemmer = null;
					stopWords = null;
			}

			const title = this.extractAndParse($, "title", stemmer, stopWords);
			const h1 = this.extractAndParse($, "h1", stemmer, stopWords);
			const h2 = this.extractAndParse($, "h2", stemmer, stopWords);
			const h3 = this.extractAndParse($, "h3", stemmer, stopWords);
			const h4 = this.extractAndParse($, "h4", stemmer, stopWords);
			const h5 = this.extractAndParse($, "h5", stemmer, stopWords);
			const h6 = this.extractAndParse($, "h6", stemmer, stopWords);
			const description = this.extractAndParse(
				$,
				'meta[name="description"]',
				stemmer,
				stopWords,
				"content",
			);
			const keywords = this.extractAndParse(
				$,
				'meta[name="keywords"]',
				stemmer,
				stopWords,
				"content",
			);
			const text = this.extractAndParse($, "body", stemmer, stopWords);

			const sections = [
				{ data: title, weight: weights.title },
				{ data: h1, weight: weights.h1 },
				{ data: h2, weight: weights.h2 },
				{ data: h3, weight: weights.h3 },
				{ data: h4, weight: weights.h4 },
				{ data: h5, weight: weights.h5 },
				{ data: h6, weight: weights.h6 },
				{ data: description, weight: weights.description },
				{ data: keywords, weight: weights.keywords },
				{ data: text, weight: weights.text },
			];

			for (const { data, weight } of sections) {
				for (const word in data) {
					pageIndex.words[word] =
						(pageIndex.words[word] || 0) + data[word] * weight;
				}
			}

			const totalScore = Object.values(pageIndex.words).reduce(
				(sum, score) => sum + score,
				0,
			);

			for (const word in pageIndex.words) {
				pageIndex.words[word] = pageIndex.words[word] / totalScore;
			}

			console.log(pageIndex);
			return pageIndex;
		} catch (error) {
			console.error(`Failed to parse HTML for ${data.url}:`, error);
			throw error;
		}
	}

	async start() {
		await this.init();

		const cursor = PageDataModel.find().cursor();

		let processed = 0;
		for await (const data of cursor) {
			if (this.indexed.has(data.url)) continue;

			try {
				const pageIndex = await this.processPageData({
					url: data.url,
					content: data.content,
				});
				await PageIndexModel.create(pageIndex);
				this.indexed.add(data.url);

				processed++;
				if (processed % 10 === 0) {
					console.info(`✅ Indexed ${processed} pages...`);
				}
			} catch (error) {
				console.error(`❌ Failed: ${data.url}`, error);
			}
		}

		console.info(`Indexing complete! Total: ${processed} pages`);
	}
}

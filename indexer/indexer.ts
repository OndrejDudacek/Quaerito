import mongoose from "mongoose";
import { PageDataModel, type PageDataToDb } from "./crawler.ts";
import * as cheerio from "cheerio";

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

export class Indexer {
	private indexed: Set<string> = new Set();
	private queue: PageDataToDb[] = [];

	constructor() {}

	async init() {
		try {
			const index = await PageIndexModel.distinct("url");
			this.indexed = new Set(index);

			const crawledPagesData = await PageDataModel.find();
			for (const data of crawledPagesData) {
				if (this.indexed.has(data.url)) continue;
				this.queue.push(data);
			}

			console.info("Indexed and queue loaded");
		} catch (error) {
			console.error("Error loading indexed and queue " + error);
		}
	}

	async processPageData(data: PageDataToDb) {
		const $ = cheerio.load(data.content);
		console.log($("h1").text());
	}
}

<template>
	<header>
		<h1>Quaerito 🔎</h1>
		<section id="search">
			<input type="text" v-model="query" />
			<button @click="sendQuery(query)">👀</button>
		</section>
		<section id="searchInfo">
			<p v-if="numberOfResults && duration">
				Najito {{ numberOfResults }} výsledků za {{ duration }} sekund.
			</p>
		</section>
	</header>
	<hr />
	<main>
		<ol>
			<li v-for="(result, i) in results" :key="i">
				<a :href="result.url" target="_blank">{{ result.title }}</a>
			</li>
		</ol>
		<section v-if="morePages" id="pagiationsControls">
			<button :disabled="page <= 0" @click="sendQuery(query, page - 1)">
				⬅️
			</button>
			<p>{{ page }}</p>
			<button
				:disabled="
					numberOfResults !== null && (page + 1) * urlsOnPage >= numberOfResults
				"
				@click="sendQuery(query, page + 1)"
			>
				➡️
			</button>
		</section>
	</main>
</template>

<script setup lang="ts">
	import { ref, type Ref } from "vue";

	const query = ref("");

	const duration: Ref<string> = ref("null");
	const results: Ref<{ url: string; title: string }[]> = ref([]);
	const numberOfResults: Ref<number | null> = ref(null);
	const page: Ref<number> = ref(0);
	const morePages: Ref<boolean> = ref(false);
	const urlsOnPage = 10;

	const sendQuery = async (query: string, pageNum: number = 0) => {
		page.value = pageNum;
		try {
			const data = await (
				await fetch(`http://localhost:3333/search?q=${query}&page=${pageNum}`)
			).json();

			numberOfResults.value = Number(data.resultsCount);
			duration.value = data.duration;

			if (numberOfResults.value && numberOfResults.value > urlsOnPage) {
				morePages.value = true;
			} else {
				morePages.value = false;
			}

			results.value = [];
			for (const page of data.results) {
				results.value.push({ url: page.url, title: new URL(page.url).host });
			}
		} catch (error) {
			console.error("Search failed:", error);
		}
	};
</script>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>

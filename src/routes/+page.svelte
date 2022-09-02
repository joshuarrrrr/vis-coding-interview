<script lang="ts">
	import penguins from "$lib/assets/penguins.json";
	import BarChart from "$lib/components/BarChart.svelte";
	import DataTable from "$lib/components/DataTable.svelte";
	import Header from "$lib/components/Header.svelte";
	import PieChart from "$lib/components/PieChart.svelte";
	import { valueCounts } from "$lib/utils";

	console.log(penguins);
</script>

<Header title="Penguins" />
<main>
	<section id="table">
		<DataTable data={penguins} />
	</section>
	<section class="chart">
		<BarChart title="bar chart" data={valueCounts(["a", "b", "c", "b", "a", "b"])} />
	</section>
	<section class="chart">
		<PieChart title="pie chart" data={valueCounts([1, 2, 2, 3, 1, 1])} />
	</section>
</main>

<style>
	main {
		padding: 1rem;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		gap: 1rem;
		place-content: center;
		place-items: center;
		min-width: 50rem;
	}

	section {
		display: grid;
	}

	#table {
		grid-column: 1 / -1;
	}

	.chart {
		height: 30rem;
	}
</style>

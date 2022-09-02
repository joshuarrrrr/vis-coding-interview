<script lang="ts">
	export let title: string | null = null;
	export let data: { [key: string]: number };
	export let colors = d3.schemeTableau10;

	import * as d3 from "d3";
	import ResponsiveChart from "./ResponsiveChart.svelte";

	let width: number;
	let height: number;

	$: radius = Math.floor(Math.min(width, height) / 2);
	$: values = Object.values(data);

	// FIXME map from the value of each item to its angle in radians
	$: angles = values.map((value) => (2 * Math.PI) / values.length);
</script>

<ResponsiveChart {title} bind:width bind:height>
	{#if width && height}
		<g transform="translate({width / 2}, {height / 2})">
			{#each [...Object.keys(data)] as name, index (name)}
				{@const startAngle = d3.sum(angles.slice(0, index))}
				{@const endAngle = startAngle + angles[index]}
				{@const arcParams = { innerRadius: 0, outerRadius: radius, startAngle, endAngle }}
				<path class="arc" d={d3.arc()(arcParams)} fill={colors[index]} />
				<g transform="translate({d3.arc().centroid(arcParams).join(',')})">
					<text dy="-.35em">{name}</text>
				</g>
			{/each}
		</g>
	{/if}
</ResponsiveChart>

<style>
	path.arc {
		stroke: white;
		stroke-width: 2px;
	}

	text {
		text-anchor: middle;
		fill: white;
		stroke: none;
		font-size: 1.2rem;
	}
</style>

<script lang="ts">
	export let title: string | null = null;
	export let data: { [key: string]: number };
	export let barPadding = 12;
	export let colors = d3.schemeTableau10;

	import * as d3 from "d3";
	import ResponsiveChart from "./ResponsiveChart.svelte";

	let width: number;
	let height: number;

	$: numBars = Object.keys(data).length;
	$: barHeight = Math.floor((height - (numBars - 1) * barPadding) / numBars);

	// the minimum and maximum values in the data
	$: domain = [0, d3.max(Object.values(data))];

	// compute the width of a bar from the numerical value of its item
	function mapValueToBarWidth(value: number) {
		return width; // FIXME this is just a placeholder
	}
</script>

<ResponsiveChart {title} bind:width bind:height>
	{#if width && height}
		{#each [...Object.entries(data)] as [key, value], index}
			<g transform="translate(0,{index * (barHeight + barPadding)})">
				<rect width={mapValueToBarWidth(value)} height={barHeight} fill={colors[index]} />
				<g transform="translate(0,{barHeight / 2})">
					<text dx="0.6em" dy=".35em">{key}</text>
				</g>
			</g>
		{/each}
	{/if}
</ResponsiveChart>

<style>
	rect {
		stroke: none;
	}

	text {
		fill: white;
		font-size: 1.2rem;
	}
</style>

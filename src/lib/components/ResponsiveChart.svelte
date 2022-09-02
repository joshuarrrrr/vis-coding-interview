<script lang="ts">
	export let title: string | null = null;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
	let clientWidth: number;
	let clientHeight: number;

	$: if (clientWidth && clientHeight) {
		width = clientWidth;
		height = clientHeight;
	}
</script>

<div id="wrapper">
	<div id="header">
		{#if title}
			<h2>{title}</h2>
		{:else}
			<slot name="header" />
		{/if}
	</div>

	<div id="chart" bind:clientWidth={width} bind:clientHeight={height}>
		<svg>
			<slot />
		</svg>
	</div>
</div>

<style>
	#wrapper {
		display: flex;
		flex-direction: column;
	}

	#header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#chart {
		flex: 1;
	}

	svg {
		width: 100%;
		height: 100%;
	}
</style>

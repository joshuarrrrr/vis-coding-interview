<script lang="ts">
	export let data: any[];
	export let rowsPerPage = 15;

	let page = 0;

	$: columns = data.length ? Object.keys(data[0]) : [];
	$: rows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
	$: numPages = data.length ? Math.ceil(data.length / rowsPerPage) : 0;
</script>

<div>
	<div id="controls">
		<span>page {page + 1} of {numPages}</span>
		<button disabled={page < 1} on:click={() => page--}>←</button>
		<button disabled={page >= numPages - 1} on:click={() => page++}>→</button>
	</div>
	<div id="wrapper">
		<table>
			<thead>
				<tr>
					{#each columns as col}
						<th>{col}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each rows as item}
					<tr>
						{#each Object.values(item) as value}
							<td class:missing={value == null}>{value || ""}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
	}

	#wrapper {
		overflow-x: auto;
	}

	#controls {
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		gap: 10px;
	}

	th {
		text-align: left;
	}

	th,
	td {
		padding: 0.1rem 0.2rem;
	}
</style>

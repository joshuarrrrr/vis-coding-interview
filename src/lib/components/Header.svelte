<script lang="ts">
	export let title: string;
</script>

<header>
	<div id="content">
		<h1>{title}</h1>
	</div>
</header>

<style>
	header {
		width: 100%;
		background-color: #213547;
		color: #f9f9f9;
	}

	#content {
		display: flex;
		flex-direction: row;
		gap: 3rem;
		padding: 0.2rem 1rem;
		justify-content: space-between;
	}
</style>

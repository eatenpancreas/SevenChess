<script>
	import Row from '$lib/svelte-components/chess-game/Row.svelte';
	const flipped = false;
</script>
<div class='w-full sm:w-3/4 max-w-3xl mx-auto aspect-square'>
	<div class='h-full flex flex-col'>
		{#each {length: 8} as _, i}
			<Row y={flipped? 7 - i : i}></Row>
		{/each}
	</div>
</div>
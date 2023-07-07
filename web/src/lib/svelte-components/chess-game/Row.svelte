<script>
	import Tile from '$lib/svelte-components/chess-game/Tile.svelte';
	export let yraw = 0;
	export let flipped = false;
	$: y = flipped? 7 - yraw : yraw;
	export let board;
</script>
<div class='grid-cols-8 grid w-full flex-1'>
	{#each {length: 8} as _, xraw}
		<Tile {xraw} {flipped} {y} {board}></Tile>
	{/each}
</div>
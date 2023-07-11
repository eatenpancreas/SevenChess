<script>
	import Tile from '$lib/svelte-components/chess-game/Tile.svelte';
	export let row_index = 0;
	export let flipped = false;
	export let board;
</script>
<div class='grid-cols-8 grid w-full flex-1'>
	{#each {length: 8} as _, row_x_raw}
		<Tile x={flipped? row_x_raw : 7 - row_x_raw}
					y={flipped? 7 - row_index : row_index}
					{board}
		></Tile>
	{/each}
</div>
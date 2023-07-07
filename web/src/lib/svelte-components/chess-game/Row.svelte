<script>
	import Tile from '$lib/svelte-components/chess-game/Tile.svelte';
	export let y;
</script>
<div class='grid-cols-8 grid w-full flex-1'>
	<Tile x={0} {y}></Tile>
	<Tile x={1} {y}></Tile>
	<Tile x={2} {y}></Tile>
	<Tile x={3} {y}></Tile>
	<Tile x={4} {y}></Tile>
	<Tile x={5} {y}></Tile>
	<Tile x={6} {y}></Tile>
	<Tile x={7} {y}></Tile>
</div>
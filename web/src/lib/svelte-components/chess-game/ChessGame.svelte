<script>
	import Row from '$lib/svelte-components/chess-game/Row.svelte';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
	import Tile from '$lib/svelte-components/chess-game/Tile.svelte';


	const flipped = false;
	const board = new ChessBoard();
</script>
<div class='w-full sm:w-3/4 max-w-3xl mx-auto aspect-square'>
	<div class='h-full flex flex-col'>
		{#each {length: 8} as _, yraw}
			<Row {yraw} {flipped} {board}></Row>
		{/each}
	</div>
</div>
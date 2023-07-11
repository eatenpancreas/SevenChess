<script>
	import { numToLetter, tileColor } from '$lib/ts-components/chess-display/TileHelper';
	import ChessPiece from '$lib/svelte-components/chess-game/ChessPiece.svelte';
	import { selected } from '$lib/stores/Chess';
	import { onDestroy } from 'svelte';
	import Destination from '$lib/svelte-components/chess-game/Destination.svelte';

	export let x = 0;
	export let y = 0;
	export let board = null;

	let isSelected = false;
	const unsub = selected.subscribe((selectedPos) => {
		isSelected = selectedPos !== null
			&& selectedPos.x === x
			&& selectedPos.y === y
	});
	onDestroy(unsub);

	function handleTileClick() {
		if (board.getTile(x, y).piece !== '  ') {
			selected.update((selectedPrev => {
				if (selectedPrev && selectedPrev.x === x && selectedPrev.y === y) {
					return null;
				} else { return {x, y} }
			}));
		}
	}
	function handleTileRightClick(e) {
		e.preventDefault();
		console.log(e)
	}
</script>

<div class='{tileColor(x, y, isSelected)} relative'
		 on:click={handleTileClick}
		 on:contextmenu={handleTileRightClick}
>
	<div class='absolute left-2 top-1 text-2xs sm:text-xs select-none'>
		{numToLetter(x)}{y + 1}
	</div>
	<div class='absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
		<ChessPiece name={board.getTile(x, y).piece} {isSelected}></ChessPiece>
	</div>
	<div class='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
		<Destination></Destination>
	</div>
</div>
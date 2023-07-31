<script lang="ts">
	import { numToLetter, tileColor } from '$lib/ts-components/chess-display/TileHelper';
	import ChessPiece from '$lib/svelte-components/chess-game/ChessPiece.svelte';
	import { selected, destinations, board } from '$lib/stores/Chess';
	import { onDestroy } from 'svelte';
	import { selectDestinations, selectTile } from '$lib/ts-components/chess-components/TileSelection';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
	import Destination from '$lib/svelte-components/chess-game/Destination.svelte';
	import type { v2, Destination as DestinationType } from '$lib/types/chess/Main';
	import { subscribeAssign } from '$lib/ts-components/general/Store';

	export let x = 0;
	export let y = 0;

	let isSelected = false;
	const unsub = selected.subscribe((selectedPos) => {
		isSelected = selectedPos !== null
			&& selectedPos.x === x
			&& selectedPos.y === y;
	});
	onDestroy(unsub);

	let piece = ChessBoard.getTile(x, y, $board)?.piece;
	const unsubBoard = board.subscribe((b) => {
		const newPiece = b.getTile(x, y)?.piece;
		if (piece !== newPiece) {
			console.log("piece changed: '" + piece + "' -> '" + newPiece + "'");
		}
		piece = newPiece;
	});
	onDestroy(unsubBoard);

	function handleTileClick() {
		const _destination = $destinations.find((d) => d.position.x === x && d.position.y === y);
		if (_destination && destination && destination.doDestinationClick) {
			destination.doDestinationClick($board);
			return;
		}

		const piece = ChessBoard.getTile(x, y, $board)?.piece;
		if (piece !== undefined && piece !== '  '
			&& ChessBoard.isPiecesTurn(piece, $board)) {

			// selects a piece, or none if it is the same piece
			let tempSelected: v2 | null = null;
			selected.update((s) => { return tempSelected = selectTile(s, x, y); })
			destinations.update((d) => {return selectDestinations(d, x, y, piece, tempSelected, $board)});
		} else {
			selected.set(null);
			destinations.set([]);
		}
	}

	let destination;
	function handleTileRightClick(e) {
		e.preventDefault();
		destination?.doDestinationClick($board);
	}

	let pointer = "";
	const unsub2 = destinations.subscribe((_destinations) => {
		const dest = _destinations.find((d) => d.position.x === x && d.position.y === y);
		if (dest === undefined) {
			pointer = ChessBoard.getTile(x, y, $board)?.piece === "  "? "" : "cursor-pointer";
		} else { pointer = "cursor-pointer"; }
	});
	onDestroy(unsub2);
</script>

<div class='{tileColor(x, y, isSelected)} relative'
		 on:click={handleTileClick}
		 on:contextmenu={handleTileRightClick}
>
	<div class='absolute left-2 top-1 text-2xs sm:text-xs select-none'>
		{numToLetter(x)}{y + 1}
	</div>
	<div class="absolute z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center {pointer}">
		<ChessPiece name={piece} {isSelected}></ChessPiece>
	</div>
	<div class='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
		<Destination bind:this={destination} {x} {y}></Destination>
	</div>
</div>
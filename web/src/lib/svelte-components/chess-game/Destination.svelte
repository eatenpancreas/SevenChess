<script lang="ts">
	import { destinations, board as storeBoard, selected } from '$lib/stores/Chess';
	import { onDestroy } from 'svelte';
	import type { Destination } from '$lib/types/chess/Main';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';

	export let x = 0;
	export let y = 0;

	let isDestination = false;
	let destination: null | Destination = null;
	const unsub = destinations.subscribe((destinationPositions) => {

		isDestination = false;
		destinationPositions.map(findDestination => {
			if (findDestination.position?.x === x && findDestination.position.y === y) {
				isDestination = true;
				destination = findDestination;
			}
		})

	});
	onDestroy(unsub);

	export function doDestinationClick(board: ChessBoard) {
		if (isDestination && destination && destination.from_position && destination.position) {

			board.movePiece(
				destination.from_position.x,
				destination.from_position.y,
				destination.position.x,
				destination.position.y,
			);
			storeBoard.update(b => b);

			console.log('move piece', destination.from_position, destination.position);

			destinations.set([]);
			selected.set(null);
		}
	}
</script>

<div class='w-[95%] aspect-square
{isDestination? " bg-black/10 " : " bg-white opacity-20 "}
rounded-xl drop-shadow-[0_0px_12px_rgba(0,0,0,1)] overflow-hidden'>
</div>
<script lang="ts">
	import { destinations } from '$lib/stores/Chess';
	import { onDestroy } from 'svelte';
	import type { Destination } from '$lib/types/chess/Main';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
	import { doMove } from '$lib/ts-components/chess-components/ChessMovementLib.js';

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
		if (isDestination && destination) {
			doMove(destination, board);
		}
	}
</script>

<div class='w-[95%] aspect-square
{isDestination? " bg-black/10 " : " bg-white opacity-20 "}
rounded-xl drop-shadow-[0_0px_12px_rgba(0,0,0,1)] overflow-hidden'>
</div>
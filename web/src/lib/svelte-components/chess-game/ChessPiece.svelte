<script>
	import { piece_exports } from '$lib/assets/pieces/PieceGFX';
	import { board, destinations } from '$lib/stores/Chess';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
	import { onDestroy } from 'svelte';

	export let name = '  ';
	export let isSelected = false;
	export let x, y;
	export let abs = false;
	export let onClick = () => {};

	$: svg = piece_exports[name];

	let pointer = "";
	const unsub2 = destinations.subscribe((_destinations) => {
		const dest = _destinations.find((d) => d.position.x === x && d.position.y === y);
		if (dest === undefined) {
			pointer = ChessBoard.getTile(x, y, $board)?.piece === "  "? "" : "cursor-pointer";
		} else { pointer = "cursor-pointer"; }
	});
	onDestroy(unsub2);
</script>

{#if svg}
	<div class="{abs === true? 'absolute z-10 top-0 left-0 right-0 bottom-0' : ''} flex justify-center items-center">
		<svg width={isSelected? "85%": "80%"}
				 viewBox='0 0 45 45'
				 on:click={onClick}
				 class={`transition ${pointer} ${isSelected?
				 "drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] mb-4" :
				 "drop-shadow-[0_7px_10px_rgba(0,0,0,0.2)] " +
					"hover:drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)] hover:pt-2"
				 }`}>
			{@html svg}
		</svg>
	</div>
{:else}
	<div class="{abs === true? 'absolute z-10 top-0 left-0 right-0 bottom-0' : ''} flex justify-center items-center {pointer}"></div>
{/if}
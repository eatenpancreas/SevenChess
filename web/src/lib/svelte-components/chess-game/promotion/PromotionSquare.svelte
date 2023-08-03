
<script lang="ts">
	import ChessPiece from '$lib/svelte-components/chess-game/ChessPiece.svelte';
	import { board } from '$lib/stores/Chess';

	export let x: number = 0;
	export let y: number = 0;

	$: pieces = $board?.promotion?.pieces || [];
	$: boardh = $board?.height || 0;
	$: overflow = Math.max((boardh - 1 - y) + (pieces.length - 1) - (boardh - 1), 0);
	$: promo_pos = $board?.promotion?.position;

	function onClick(piece) {
		$board?.promotion?.decision(piece);
	}

</script>

{#if promo_pos && x === promo_pos.x && y === promo_pos.y}
	<div class='absolute left-0 right-0 m-1 bg-white z-30 rounded-xl flex gap-2 flex-col shadow shadow-black/80'
			 style="top: {-overflow}00%;
			 bottom: {-(pieces.length - 1 - overflow)}00%"
	>
		{#each pieces as piece}
			<div class='w-full h-full flex justify-center items-center'>
				<ChessPiece onClick={() => {onClick(piece)}} name={piece}/>
			</div>
		{/each}
	</div>
{/if}
<script>
	import Row from '$lib/svelte-components/chess-game/Row.svelte';
	import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
	import { clickOutside } from '$lib/ts-components/general/Click';
	import { selected } from '$lib/stores/Chess';


	const flipped = true;
	const board = new ChessBoard();

	function handleClickOutside(event) {
		selected.set(null);
	}
</script>

<div class='w-3xl mx-auto aspect-square'
		 style='max-width: 100vh'
		 use:clickOutside on:click_outside={handleClickOutside}
>
	<div style='height: 95%' class='sm:h-3/4 mx-auto aspect-square'>
		<div class='h-full flex flex-col'>
			{#each {length: 8} as _, row_index}
				<Row {row_index} {flipped} {board}></Row>
			{/each}
		</div>
	</div>
</div>
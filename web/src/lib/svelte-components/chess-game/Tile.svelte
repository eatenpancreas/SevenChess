<script>
	import { numToLetter, tileColor } from '$lib/ts-components/chess-display/TileHelper';
	import TileContents from '$lib/svelte-components/chess-game/TileContents.svelte';

	export let y;
	export let xraw = 0;
	export let flipped = false;
	$: x = flipped? xraw : 7 - xraw;
	export let board;
</script>

<div class='{tileColor(x, y)} relative'>
	<div class='absolute left-2 top-1 text-xs select-none'>
		{numToLetter(x)}{y + 1}
	</div>
	<div class='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
		<div>
			<TileContents></TileContents>
		</div>
	</div>
</div>
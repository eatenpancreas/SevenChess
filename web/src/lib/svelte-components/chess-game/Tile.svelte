<script>
	import { numToLetter, tileColor } from '$lib/ts-components/chess_display/TileHelper';

	export let y;
	export let x;
</script>

<div class='{tileColor(x, y)} relative'>
	<div class='absolute left-2 top-1 text-xs select-none'>
		{numToLetter(x)}{y}
	</div>
	<div class=''>

	</div>
</div>
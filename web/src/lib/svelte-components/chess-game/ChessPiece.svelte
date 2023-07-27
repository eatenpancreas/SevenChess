<script>
	import { piece_exports } from '$lib/assets/pieces/Pieces';

	export let name = '  ';
	export let isSelected = false;
	$: svg = piece_exports[name];
</script>

{#if svg}
	<svg width={isSelected? "85%": "80%"}
			 viewBox='0 0 45 45'
			 class={`transition  ${isSelected?
			 "drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] mb-4" :
			 "drop-shadow-[0_7px_10px_rgba(0,0,0,0.2)] " +
			  "hover:drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)] hover:pt-2"
			 }`}>
		{@html svg}
	</svg>
{/if}
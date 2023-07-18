<script>
	import { destinations } from '$lib/stores/Chess';
	import { onDestroy } from 'svelte';

	export let x = 0;
	export let y = 0;

	let isDestination = false;
	const unsub = destinations.subscribe((destinationPositions) => {
		if (destinationPositions === undefined) { return; }

		destinationPositions.map(destination => {
			if (destination !== null && destination.x === x && destination.y === y) {
				isDestination = true;
			}
		})

	});
	onDestroy(unsub);
</script>

<div class='w-[95%] aspect-square {isDestination? " bg-black " : "bg-white"} rounded-xl opacity-20 drop-shadow-[0_0px_12px_rgba(0,0,0,1)] overflow-hidden'>
	{#if isDestination}
		<div class=' w-full h-full'>
			Hi
		</div>
	{/if}
</div>
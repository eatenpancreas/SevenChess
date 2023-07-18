import type { v2 } from '$lib/types/chess/Main';

export function selectTile(
	selectedPrev: any, x: number, y: number
): v2 {
	if (selectedPrev && selectedPrev.x === x && selectedPrev.y === y) {
		return null;
	} else {
		return {x, y}
	}
}

export function selectDestinations(
	destinationsPrev: any, x: number, y: number
): v2[] {
	return [{ x: 1, y: 1 }]
}
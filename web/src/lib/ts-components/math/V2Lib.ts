import type { v2 } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';


export function addV2(pos1: v2, pos2: v2): v2 {
	return { x: pos1.x + pos2.x, y: pos1.y + pos2.y };
}

export function equalsV2(pos1: v2, pos2: v2) {
	return pos1.x === pos2.x && pos1.y === pos2.y;
}
import type { v2 } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';

export function addDir(origin: v2, x_dir: number, y_dir: number, piece: PieceType): v2 {
	if (!origin || !piece) return null;
	return { x: origin.x + x_dir, y: origin.y + (piece.substr(1, 1) !== "d" ? y_dir : -y_dir) };
}
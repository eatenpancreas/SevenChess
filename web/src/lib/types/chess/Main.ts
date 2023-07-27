import type { PieceType } from '$lib/types/chess/PieceInfo';

export type v2  = {
	x: number,
	y: number
} | null

export type Destination = {
	position: v2,
	type: "MOVE" | "CAPTURE"
	from_position: v2,
	piece_type: PieceType,
}

export type Scores = {
	win: false | "l" | "d" | "draw",
	l: number,
	d: number
}
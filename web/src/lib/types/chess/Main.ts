import type { PieceType } from '$lib/types/chess/PieceInfo';

export type v2  = {
	x: number,
	y: number
} | null

export type Destination = {
	position: v2,
	type: "MOVE" | "CAPTURE" | "CASTLE",
	from_position: v2,
	piece_type: PieceType,
	additional_movements?: Destination[]
}

export type Scores = {
	win: false | "l" | "d" | "draw",
	l: number,
	d: number
}
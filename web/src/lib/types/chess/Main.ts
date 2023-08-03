import type { PieceType, PieceTypeSimple } from '$lib/types/chess/PieceInfo';

export type v2  = {
	x: number,
	y: number
}

export type Destination = {
	position: v2,
	type: "MOVE" | "CAPTURE" | "CASTLE",
	from_position: v2,
	piece_type: PieceType,
	additional_movements?: Destination[],
	creates_channel?: MoveChannel,
	promotes_to?: PieceTypeSimple[],
}

export type PromotionOccurrence = {
	position: v2,
	pieces: PieceType[],
	player: PlayerType,
	decision: (piece: PieceType) => void,
}

export type Actions = {
	destroy: (position: v2) => void,
	move: (from_position: v2, to_position: v2) => void,
}

export type MoveChannel = {
	position: v2,
	name: string,
}

export type PlayerType = "l" | "d";

export type GameState = {
	state: "SELECTING" | "PLAYING";
	player: PlayerType;
}

export type Scores = {
	win: false | PlayerType | "draw",
	l: number,
	d: number
}
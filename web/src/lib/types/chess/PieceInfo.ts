import type { v2 } from '$lib/types/chess/Main';

export type PieceInfo = {
	piece: PieceTypeSimple;
	value: number | "infinite";
	moves: Move[];
}

export type Move = {
	move: MoveDir,
	rules: MoveRules,
}

type MoveRules = {
	needsPath?: v2[],
	canEnPassant?: boolean,

	createsEnPassant?: boolean,
	onlyOnFirstMove?: boolean,
	canPromote?: PieceTypeSimple[] | false,

	canNotCapture?: boolean,
	canNotMove?: boolean,

	castlingRights?: {
		otherPiece: PieceTypeSimple,
		direction: "left" | "right"
	}
}

type MoveDir = {
	x: number,
	y: number,
	amount: number | "infinite"
}

export type PieceType = "  "
	| "kl"	| "kd"
	| "ql"	| "qd"
	| "rl"	| "rd"
	| "bl"	| "bd"
	| "nl"	| "nd"
	| "pl"	| "pd"

export type PieceTypeSimple = "  "
	| "k" | "q" | "r" | "b" | "n" | "p"
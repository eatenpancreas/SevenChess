import type { Actions, MoveChannel, v2 } from '$lib/types/chess/Main';

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
	needsPath?: v2[] | false,
	needsSafeSquares?: v2[] | false,

	listensToChannel?: Listener | false,
	createsChannel?: string | false,

	canPromote?: PieceTypeSimple[] | false,

	canNotCapture?: boolean,
	canNotMove?: boolean,

	customMoveRule?: customMoveRule | false,

	castlingRights?: {
		otherPiece: PieceTypeSimple,
		otherPosition: v2,
		otherLandingSquare: v2,
		otherCustomMoveRule: customMoveRule,
	} | false,
}

export type Listener = MoveChannel & CustomAction;

type CustomAction = {
	action: (actions: Actions) => void;
}

type customMoveRule = (data: {
	moveIndex: number,
}) => boolean;

type MoveDir = {
	x: number,
	y: number,
	amount: number | "infinite"
}

export type PieceType = "  "
	| "kl"	| "kd" 	| "ql"	| "qd"
	| "rl"	| "rd" 	| "bl"	| "bd"
	| "nl"	| "nd" 	| "pl"	| "pd"

export type PieceTypeSimple = "  "
	| "k" | "q" | "r" | "b" | "n" | "p"
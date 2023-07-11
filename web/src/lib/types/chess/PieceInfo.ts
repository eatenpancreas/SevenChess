

export type PieceInfo = {
	piece: PieceTypeSimple;
	moves: Move[];
	rules: {
		canPromote: PieceTypeSimple[] | false,
		willEndGame: boolean,
	} | false,
}

type Move = {
	move: MoveDir | MovePos,
	rules: MoveRules | false,
}

type MoveRules = {
	canJump: boolean,
	canEnPassant: boolean,

	createsEnPassant: boolean,
	onlyOnFirstMove: boolean,

	canNotCapture: boolean,
	canNotMove: boolean,

	castlingRights: {
		otherPiece: PieceTypeSimple,
		direction: "left" | "right"
	} | false,
}

type MoveDir = {
	x: number,
	y: number,
	amount: number | "infinite"
}

type MovePos = {
	x: number,
	y: number,
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
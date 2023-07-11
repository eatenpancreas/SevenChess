import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Pawn: PieceInfo = {
	piece: "p",
	rules: {
		canPromote: ["q", "r", "b", "n"],
		willEndGame: false
	},
	moves: [
		{ move: { x: 1, y: 1 },
			rules: {
				canJump: false,
				canEnPassant: true,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotMove: true,
				canNotCapture: false,

				castlingRights: false,
			},
		},
		{ move: { x: 0, y: 1 },
			rules: {
				canJump: false,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: true,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: -1, y: 1 },
			rules: {
				canJump: false,
				canEnPassant: true,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: true,

				castlingRights: false,
			},
		},
		{ move: { x: 0, y: 2 },
			rules: {
				canJump: false,
				canEnPassant: false,

				createsEnPassant: true,
				onlyOnFirstMove: true,

				canNotCapture: true,
				canNotMove: false,

				castlingRights: false,
			},
		},
	]
}

export default Pawn;
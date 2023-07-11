import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Knight: PieceInfo = {
	piece: "n",
	rules: false,
	moves: [
		{ move: { x: 1, y: 2, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: -1, y: 2, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: 2, y: 1, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: 2, y: -1, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: -1, y: -2, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: 1, y: -2, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: -2, y: 1, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
		{ move: { x: -2, y: -1, amount: "infinite" },
			rules: {
				canJump: true,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: false,

				canNotCapture: false,
				canNotMove: false,

				castlingRights: false,
			},
		},
	]
}

export default Knight;
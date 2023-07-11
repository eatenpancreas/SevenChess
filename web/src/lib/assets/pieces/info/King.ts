import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const King: PieceInfo = {
	piece: "k",
	rules: {
		canPromote: false,
		willEndGame: true
	},
	moves: [
		{ move: { x: 1, y: 1, },
			rules: false,
		},
		{ move: { x: 0, y: 1, },
			rules: false,
		},
		{ move: { x: -1, y: 1, },
			rules: false,
		},
		{ move: { x: 1, y: 0, },
			rules: false,
		},
		{ move: { x: -1, y: 0, },
			rules: false,
		},
		{ move: { x: 1, y: -1, },
			rules: false,
		},
		{ move: { x: 0, y: -1, },
			rules: false,
		},
		{ move: { x: -1, y: -1, },
			rules: false,
		},
		{ move: { x: 2, y: 0, },
			rules: {
				canJump: false,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: true,

				canNotMove: false,
				canNotCapture: false,

				castlingRights: {
					otherPiece: 'r',
					direction: 'right'
				},
			},
		},
		{ move: { x: -2, y: 0, },
			rules: {
				canJump: false,
				canEnPassant: false,

				createsEnPassant: false,
				onlyOnFirstMove: true,

				canNotMove: true,
				canNotCapture: false,

				castlingRights: {
					otherPiece: 'r',
					direction: 'left'
				},
			},
		},
	]
}

export default King;
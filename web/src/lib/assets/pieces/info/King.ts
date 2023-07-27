import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const King: PieceInfo = {
	piece: "k",
	value: "infinite",
	moves: [
		{ move: { x: 1, y: 1, amount: 1},
			rules: {},
		},
		{ move: { x: 0, y: 1, amount: 1},
			rules: {},
		},
		{ move: { x: -1, y: 1, amount: 1},
			rules: {},
		},
		{ move: { x: 1, y: 0, amount: 1},
			rules: {},
		},
		{ move: { x: -1, y: 0, amount: 1},
			rules: {},
		},
		{ move: { x: 1, y: -1, amount: 1},
			rules: {},
		},
		{ move: { x: 0, y: -1, amount: 1},
			rules: {},
		},
		{ move: { x: -1, y: -1, amount: 1},
			rules: {},
		},
		{ move: { x: 2, y: 0, amount: 1},
			rules: {
				moveIndexRule: (moveIndex) => moveIndex === 0,
				needsPath: [{ x: 1, y: 0 }],
				needsSafeSquares: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],

				castlingRights: {
					otherPiece: 'r',
					otherPosition: { x: 7, y: 0 },
					otherLandingSquare: { x: 5, y: 0 },
				},
			},
		},
		{ move: { x: -2, y: 0, amount: 1},
			rules: {
				moveIndexRule: (moveIndex) => moveIndex === 0,
				needsPath: [{ x: -1, y: 0 }, { x: -2, y: 0 }],
				needsSafeSquares: [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }],

				castlingRights: {
					otherPiece: 'r',
					otherPosition: { x: 0, y: 0 },
					otherLandingSquare: { x: 3, y: 0 },
				},
			},
		},
	]
}

export default King;
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
				onlyOnFirstMove: true,

				castlingRights: {
					otherPiece: 'r',
					direction: 'right'
				},
			},
		},
		{ move: { x: -2, y: 0, amount: 1},
			rules: {
				onlyOnFirstMove: true,
				canNotMove: true,

				castlingRights: {
					otherPiece: 'r',
					direction: 'left'
				},
			},
		},
	]
}

export default King;
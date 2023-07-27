import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Rook: PieceInfo = {
	piece: "r",
	value: 5,
	moves: [
		{ move: { x: 0, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 1, y: 0, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: 0, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 0, y: -1, amount: "infinite" },
			rules: {},
		},
	]
}

export default Rook;
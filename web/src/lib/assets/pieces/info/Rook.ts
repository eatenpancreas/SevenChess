import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Rook: PieceInfo = {
	piece: "r",
	rules: false,
	moves: [
		{ move: { x: 0, y: 1, amount: "infinite" },
			rules: false,
		},
		{ move: { x: 1, y: 0, amount: "infinite" },
			rules: false,
		},
		{ move: { x: -1, y: 0, amount: "infinite" },
			rules: false,
		},
		{ move: { x: 0, y: -1, amount: "infinite" },
			rules: false,
		},
	]
}

export default Rook;
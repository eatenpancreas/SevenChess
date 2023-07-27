import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Bishop: PieceInfo = {
	piece: "b",
	value: 3,
	moves: [
		{ move: { x: 1, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 1, y: -1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: -1, amount: "infinite" },
			rules: {},
		},
	]
}

export default Bishop;
import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Bishop: PieceInfo = {
	piece: "b",
	rules: false,
	moves: [
		{ move: { x: 1, y: 1, amount: "infinite" },
			rules: false,
		},
		{ move: { x: -1, y: 1, amount: "infinite" },
			rules: false,
		},
		{ move: { x: 1, y: -1, amount: "infinite" },
			rules: false,
		},
		{ move: { x: -1, y: -1, amount: "infinite" },
			rules: false,
		},
	]
}

export default Bishop;
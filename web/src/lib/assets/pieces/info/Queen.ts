import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Queen: PieceInfo = {
	piece: "q",
	value: 9,
	moves: [
		{ move: { x: 1, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 0, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: 1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 1, y: 0, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: 0, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 1, y: -1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: 0, y: -1, amount: "infinite" },
			rules: {},
		},
		{ move: { x: -1, y: -1, amount: "infinite" },
			rules: {},
		},
	]
}

export default Queen;
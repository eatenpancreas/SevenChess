import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Knight: PieceInfo = {
	piece: "n",
	value: 3,
	moves: [
		{ move: { x: 1, y: 2, amount: 1 },
			rules: {},
		},
		{ move: { x: -1, y: 2, amount: 1 },
			rules: {},
		},
		{ move: { x: 2, y: 1, amount: 1 },
			rules: {},
		},
		{ move: { x: 2, y: -1, amount: 1 },
			rules: {},
		},
		{ move: { x: -1, y: -2, amount: 1 },
			rules: {},
		},
		{ move: { x: 1, y: -2, amount: 1 },
			rules: {},
		},
		{ move: { x: -2, y: 1, amount: 1 },
			rules: {},
		},
		{ move: { x: -2, y: -1, amount: 1 },
			rules: {},
		},
	]
}

export default Knight;
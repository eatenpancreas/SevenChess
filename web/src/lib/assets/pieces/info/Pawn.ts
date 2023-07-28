import type {PieceInfo} from '$lib/types/chess/PieceInfo';

const Pawn: PieceInfo = {
	piece: "p",
	value: 1,
	moves: [
		{ move: { x: 1, y: 1, amount: 1},
			rules: {
				canEnPassant: true,
				canNotMove: true,
				canPromote: ["q", "r", "b", "n"],
			},
		},
		{ move: { x: 0, y: 1, amount: 1 },
			rules: {
				canNotCapture: true,
				canPromote: ["q", "r", "b", "n"],
			},
		},
		{ move: { x: -1, y: 1, amount: 1 },
			rules: {
				canEnPassant: true,
				canNotMove: true,
				canPromote: ["q", "r", "b", "n"],
			},
		},
		{ move: { x: 0, y: 2, amount: 1 },
			rules: {
				createsEnPassant: true,
				customMoveRule: ({ moveIndex }) => moveIndex === 0,
				canNotCapture: true,
				needsPath: [{ x: 0, y: 1 }]
			},
		},
	]
}

export default Pawn;
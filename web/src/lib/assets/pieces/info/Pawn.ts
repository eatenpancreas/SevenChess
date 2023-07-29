import type { Listener, PieceInfo, PieceTypeSimple } from '$lib/types/chess/PieceInfo';

const promotions: PieceTypeSimple[] = ["q", "r", "b", "n"]

const Pawn: PieceInfo = {
	piece: "p",
	value: 1,
	moves: [
		{ move: { x: 1, y: 1, amount: 1},
			rules: {
				listensToChannel: enPassantListener(1),
				canNotMove: true,
				canPromote: promotions,
			},
		},
		{ move: { x: 0, y: 1, amount: 1 },
			rules: {
				canNotCapture: true,
				canPromote: promotions,
			},
		},
		{ move: { x: -1, y: 1, amount: 1 },
			rules: {
				listensToChannel: enPassantListener(-1),
				canNotMove: true,
				canPromote: promotions,
			},
		},
		{ move: { x: 0, y: 2, amount: 1 },
			rules: {
				createsChannel: "en_passant",
				customMoveRule: ({ moveIndex }) => moveIndex === 0,
				canNotCapture: true,
				needsPath: [{ x: 0, y: 1 }]
			},
		},
	]
}


function enPassantListener(direction: number): Listener {
	return {
		position: { x: direction, y: 0 },
		name: "en_passant",
		action: ({ destroy, move }) => {
			destroy({ x: direction, y: 0 });

			move({ x: 0, y: 0 }, { x: direction, y: 1 });
		},
	}
}

export default Pawn;
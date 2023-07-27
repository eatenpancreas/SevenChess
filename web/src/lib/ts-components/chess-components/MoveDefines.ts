import type { Destination, v2 } from '$lib/types/chess/Main';
import type { Move, PieceType } from '$lib/types/chess/PieceInfo';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
import { addDir } from '$lib/ts-components/chess-components/ChessMovementLib';


export function add_move(
	destinations: &Destination[], x: number, y: number, piece: PieceType, move: Move,  board: ChessBoard | null | undefined
) {
	if (!board) return;

		const len = (move.move.amount === 'infinite'? Math.max(board.height, board.width) : move.move.amount);
		let move_pos: v2 = { x: x, y: y }

		console.log(piece + ", " + len);

		for (let i = 0; i < len; i++) {
			move_pos = addDir(move_pos, move.move.x, move.move.y, piece);
			if (!move_pos || move_pos.x < 0 || move_pos.x >= board.width || move_pos.y < 0 || move_pos.y >= board.height) break;

			// checks for custom
			if (move.rules.moveIndexRule) {
				const index = board.getTile(x, y)?.move_index;
				if (index === undefined) break;

				// results in no destination if custom rule is returned false
				if (!move.rules.moveIndexRule(index)) break;
			}

			// checks all required paths
			if (move.rules.needsPath) {
				let doBreak = false;
				move.rules.needsPath.map(path => {
					if (!path) { doBreak = true; return; }
					const pos = addDir({ x: x, y: y }, path.x, path.y, piece);

					if (!pos) {
						doBreak = true;
					} else if (board.isOccupied(pos.x, pos.y)) doBreak = true;
				})

				if (doBreak) break;
			}

			// capturing
			if (board.isOccupied(move_pos.x, move_pos.y)) {
				if (board.isOpponent(move_pos.x, move_pos.y, piece) && !move.rules.canNotCapture) {
					destinations.push({
						position: { x: move_pos.x, y: move_pos.y },
						type: "CAPTURE",
						from_position: { x: x, y: y },
						piece_type: piece,
					})
				}
				break;
			}

			// regular move
			if (!move.rules.canNotMove) {
				destinations.push({
					position: { x: move_pos.x, y: move_pos.y },
					type: "MOVE",
					from_position: { x: x, y: y },
					piece_type: piece,
				})
			}
	}


}
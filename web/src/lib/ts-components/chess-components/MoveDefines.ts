import type { Destination, v2 } from '$lib/types/chess/Main';
import type { Move, PieceType } from '$lib/types/chess/PieceInfo';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
import { addDir } from '$lib/ts-components/chess-components/ChessMovementLib';


export function add_destination(
	destinations: &Destination[], x: number, y: number, piece: PieceType, move: Move,  board: ChessBoard | null | undefined
) {
	if (!board) return;
		const len = (move.move.amount === 'infinite'? Math.max(board.height, board.width) : move.move.amount);
		let move_pos: v2 | null = { x: x, y: y }

		console.log(piece + ", " + len);

		for (let i = 0; i < len; i++) {
			move_pos = addDir(move_pos, move.move.x, move.move.y, piece);
			if (!move_pos || move_pos.x < 0 || move_pos.x >= board.width || move_pos.y < 0 || move_pos.y >= board.height) break;

			// checks for custom
			if (move.rules.customMoveRule) {
				const index = board.getTile(x, y)?.move_index;
				if (index === undefined) break;

				// results in no destination if custom rule is returned false
				if (!move.rules.customMoveRule({
					moveIndex: index,
				})) break;
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

			if (move.rules.listensToChannel) {
				const listener = move.rules.listensToChannel;
				const anyChannels = board.move_channels.find(channel => {
					return channel.name === listener.name;
				})

				if (!anyChannels) break;
				if (anyChannels.position.x !== x + listener.position.x || anyChannels.position.y !== y + listener.position.y) break;

				listener.action({
					destroy: (position: v2) => {
						board.destroyPiece(x + position.x, y + position.y);
					},
					move: (from: v2, to: v2) => {
						destinations.push({
							position: { x: x + to.x, y: y + to.y },
							type: "MOVE",
							from_position: { x: x + from.x, y: y + from.y },
							piece_type: piece,
						});
					}
				})
			}

			// castling move
			if (move.rules.castlingRights) {
				const castling = move.rules.castlingRights;

				if (castling.otherPosition && castling.otherLandingSquare) {
					const otherTile = board.getTile(x + castling.otherPosition.x, y + castling.otherPosition.y);
					if (!otherTile) break;

					console.log("xxxxx")

					if (otherTile.piece.substr(0, 1) === castling.otherPiece
						&& castling.otherCustomMoveRule({ moveIndex: otherTile.move_index })) {

						console.log("castling");

						destinations.push({
							position: { x: move_pos.x, y: move_pos.y },
							type: "CASTLE",
							from_position: { x: x, y: y },
							piece_type: piece,
							additional_movements: [{
								position: { x: x + castling.otherLandingSquare.x, y: y + castling.otherLandingSquare.y },
								type: "CASTLE",
								from_position: { x: x + castling.otherPosition.x, y: y + castling.otherPosition.y },
								piece_type: otherTile.piece,
							}]
						})
					}
				}
				break;
			}

			// regular move
			if (!move.rules.canNotMove) {
				const dest_regular: Destination = {
					position: { x: move_pos.x, y: move_pos.y },
					type: "MOVE",
					from_position: { x: x, y: y },
					piece_type: piece,
				}

				if (move.rules.createsChannel) {
					dest_regular.creates_channel = {
						position: { x: move_pos.x, y: move_pos.y },
						name: move.rules.createsChannel,
					}
				}

				destinations.push(dest_regular)
			}
	}
}
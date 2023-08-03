import type { Destination, PlayerType } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';
import { board as storeBoard, destinations, selected } from '$lib/stores/Chess';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';

export function doMove(destination: Destination, board: ChessBoard) {
	if (board.state.state !== "PLAYING") return;
	if (!destination.from_position || !destination.position) return;

	board.movePiece(
		destination.from_position.x,
		destination.from_position.y,
		destination.position.x,
		destination.position.y,
	);

	if (destination.additional_movements) {
		destination.additional_movements.map(additional_movement => {
			if (!additional_movement.from_position || !additional_movement.position) return;
			board.moveAdditionalPiece(
				additional_movement.from_position.x,
				additional_movement.from_position.y,
				additional_movement.position.x,
				additional_movement.position.y,
			);
			console.log('move extra piece', additional_movement.from_position, additional_movement.position);
		})
	}

	console.log('move piece', destination.from_position, destination.position);

	destinations.set([]);
	selected.set(null);

	if (destination.creates_channel) {
		board.move_channels = [destination.creates_channel];
	} else {
		board.move_channels = [];
	}

	if (destination.promotes_to && (destination.position.y === 0 || destination.position.y === 7)) {
		board.state.state = "SELECTING";
		board.promotion = {
			position: destination.position,
			pieces: destination.promotes_to.map(piece => piece + board.state.player as PieceType),
			player: board.state.player,
			decision: (piece: PieceType) => {
				console.log('promote piece', piece);

				board.setPiece(destination.position, piece);
				board.promotion = undefined;

				board.state.state = "PLAYING";
				finishMove(board);
			}
		}
		storeBoard.update(b => b);
	} else {
		finishMove(board);
	}
}

function getPlayer(move: number): PlayerType {
	return move % 2 === 0 ? "l" : "d";
}

function finishMove(board: ChessBoard) {
	board.move += 1;
	board.state.player = getPlayer(board.move);
	storeBoard.update(b => b);
}
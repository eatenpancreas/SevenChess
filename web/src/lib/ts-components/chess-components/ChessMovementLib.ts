import type { Destination, v2 } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';
import { board as storeBoard, destinations, selected } from '$lib/stores/Chess';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';

export function addDir(origin: v2, x_dir: number, y_dir: number, piece: PieceType): v2 | null {
	if (!origin || !piece) return null;
	return { x: origin.x + x_dir, y: origin.y + (piece.substr(1, 1) !== "d" ? y_dir : -y_dir) };
}

export function doMove(destination: Destination, board: ChessBoard) {
	if (destination.from_position && destination.position) {

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

		storeBoard.update(b => b);
	}
}
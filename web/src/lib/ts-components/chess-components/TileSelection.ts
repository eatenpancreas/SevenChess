import type { Destination, v2 } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';
import { add_destination } from '$lib/ts-components/chess-components/MoveDefines';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
import { getPieceInfo } from '$lib/ts-components/chess-components/ChessPieceLib';

export function selectTile(
	selectedPrev: any, x: number, y: number
): v2 | null {
	if (selectedPrev && selectedPrev.x === x && selectedPrev.y === y) {
		return null;
	} else {
		return {x, y}
	}
}

export function selectDestinations(
	destinationsPrev: any, x: number, y: number, piece: PieceType, selected: v2 | null, board: ChessBoard | null | undefined
): Destination[] {
	if (selected === null) return [];

	const pieceInfo = getPieceInfo(piece);

	const destinations: Destination[] = [];

	pieceInfo?.moves.map((move) => {
		// new destination for every move
		add_destination(destinations, x, y, piece, move, board);
	})

	return destinations
}
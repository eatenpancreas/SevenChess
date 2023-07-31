import type { Destination, v2 } from '$lib/types/chess/Main';
import type { PieceType } from '$lib/types/chess/PieceInfo';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
import { getPieceInfo } from '$lib/ts-components/chess-components/ChessPieceLib';
import type { Move } from '$lib/types/chess/PieceInfo';
import MoveDefines from '$lib/ts-components/chess-components/MoveDefines';

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
	if (!board) return [];

	const pieceInfo = getPieceInfo(piece);

	const destinations: Destination[] = [];

	pieceInfo?.moves.map((move) => {
		// new destination for every move
		add_destination(destinations, x, y, piece, move, board);
	})

	return destinations
}


function add_destination(
	destinations: &Destination[], x: number, y: number, piece: PieceType, move: Move,  board: ChessBoard
) {
	const len = (move.move.amount === 'infinite' ? Math.max(board.height, board.width) : move.move.amount);
	const origin: v2 = { x: x, y: y }

	console.log(piece + ", " + len);

	for (let i = 1; i <= len; i++) {
		const move_defines = new MoveDefines(
			destinations, move.rules, origin, board, piece, { x: i * move.move.x, y: i * move.move.y }
		);

		console.log("pos:: ", move_defines.move_position);

		if (move_defines.isFriendly()) return;

		if (move_defines.disabledByCustomMoveRule()) continue;
		if (move_defines.hasOccupiedPaths()) return;
		if (move_defines.doChannelListen()) continue;
		if (move_defines.doCastling()) continue;
		if (move_defines.doCapture()) return;
		move_defines.doRegularMove();
	}
}
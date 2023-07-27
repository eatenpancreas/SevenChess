import type { PieceType } from '$lib/types/chess/PieceInfo';
import pieceInfo from '$lib/assets/pieces/PieceInfo';


export function getPieceInfo(piece: PieceType) {
	const raw = pieceInfo.filter((i) => {
		return i.piece === piece.substr(0, 1);
	})

	if (raw.length > 0) {
		return raw[0];
	} else {
		return null;
	}
}
import type { PieceType } from '../../../types/chess/PieceType';

export class ChessTile {
	piece: PieceType = "empty";

	constructor(piece: PieceType) {
		this.piece = piece;
	}
}


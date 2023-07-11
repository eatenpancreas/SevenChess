import type { PieceType } from "$lib/types/chess/PieceInfo";

export class ChessTile {
	piece: PieceType = "  ";

	constructor(piece: PieceType) {
		this.piece = piece;
	}
}


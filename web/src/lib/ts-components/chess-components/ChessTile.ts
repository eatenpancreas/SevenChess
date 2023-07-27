import type { PieceType } from "$lib/types/chess/PieceInfo";

export class ChessTile {
	piece: PieceType = "  ";
	move_index: number = 0;

	constructor(piece: PieceType) {
		this.piece = piece;
	}


}


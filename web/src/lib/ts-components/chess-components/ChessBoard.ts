import { ChessTile } from '$lib/ts-components/chess-components/ChessTile';
import { default_chessboard_tiles } from '$lib/ts-components/chess-components/DefaultChessBoard';
import type { PieceType } from '$lib/types/chess/PieceInfo';

export class ChessBoard {
	move = 0;
	height = 8;
	width = 8;
	tiles: ChessTile[] = [];

	constructor() {
		default_chessboard_tiles.map(default_tile => {
			this.tiles.push(new ChessTile(default_tile));
		});
	}

	getTile(x: number, y: number): ChessTile | undefined { return ChessBoard.getTile(x, y, this); }
	static getTile(x: number, y: number, board: ChessBoard): ChessTile | undefined {
		if (!board) return undefined;

		const index = x + y * board.width;
		return board.tiles[index];
	}

	isOccupied(x: number, y: number): boolean { return ChessBoard.isOccupied(x, y, this); }
	static isOccupied(x: number, y: number, board: ChessBoard): boolean {
		if (!board) return true;

		const tile = board.getTile(x, y);
		if (!tile) return true;

		return tile.piece !== "  ";
	}
	//
	// setTile(x: number, y: number, tile: ChessTile) {
	// 	const index = x + y * this.width;
	// 	this.tiles[index] = tile;
	// }

	isOpponent(x: number, y: number, piece: PieceType): boolean { return ChessBoard.isOpponent(x, y, this, piece); }
	static isOpponent(x: number, y: number, board: ChessBoard, piece: PieceType): boolean {
		if (!board) return false;

		const tile = board.getTile(x, y);
		if (!tile) return false;

		return tile.piece.substr(1, 1) !== piece.substr(1, 1);
	}

	movePiece(from_x: number, from_y: number, to_x: number, to_y: number) { ChessBoard.movePiece(from_x, from_y, to_x, to_y, this); }
	static movePiece(from_x: number, from_y: number, to_x: number, to_y: number, board: ChessBoard) {
		if (!board) return undefined;

		const from_tile = board.getTile(from_x, from_y);
		const to_tile = board.getTile(to_x, to_y);

		if (!from_tile || !to_tile) return undefined;

		to_tile.piece = from_tile.piece;
		from_tile.piece = "  ";
	}
}


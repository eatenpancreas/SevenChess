import { ChessTile } from '$lib/ts-components/chess-components/ChessTile';
import { default_chessboard_tiles } from '$lib/ts-components/chess-components/DefaultChessBoard';
import type { PieceType } from '$lib/types/chess/PieceInfo';
import type { Scores, MoveChannel, v2, PromotionOccurrence, GameState } from '$lib/types/chess/Main';
import { getPieceInfo } from '$lib/ts-components/chess-components/ChessPieceLib';

export class ChessBoard {
	move = 0;
	height = 8;
	width = 8;
	scores: Scores = { win: false, l: 0, d: 0 }
	state: GameState = { state: "PLAYING", player: "l" };
	tiles: ChessTile[] = [];
	move_channels: MoveChannel[] = [];
	promotion?: PromotionOccurrence;

	constructor() {
		default_chessboard_tiles.map(default_tile => {
			this.tiles.push(new ChessTile(default_tile));
		});
	}

	calculateScores() {
		this.scores.l = 0;
		this.scores.d = 0;

		this.tiles.map(tile => {
			if (tile.piece !== "  ") {
				const piece_value = getPieceInfo(tile.piece)?.value;
				const piece_color = tile.piece.substr(1, 1);

				if (typeof piece_value === "number") {
					if (piece_color === "l") this.scores.l += piece_value;
					else if (piece_color === "d") this.scores.d += piece_value;
				} else if (piece_value === "infinite") {
					if (piece_color === "l") this.scores.win = piece_color;
					else if (piece_color === "d") this.scores.win = piece_color;
				} else {

				}

			}
		});
	}

	static isPiecesTurn(piece: PieceType, board: ChessBoard): boolean {
		if (!board) return false;

		const piece_color = piece.substr(1, 1);
		console.log(board.move % 2 === 0 ? piece_color === "l" : piece_color === "d");

		return board.move % 2 === 0 ? piece_color === "l" : piece_color === "d";
	}

	getTile(x: number, y: number): ChessTile | undefined { return ChessBoard.getTile(x, y, this); }
	static getTile(x: number, y: number, board: ChessBoard | null): ChessTile | undefined {
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

		// if (tile.piece === "  ") return false;
		return tile.piece.substr(1, 1) !== piece.substr(1, 1);
	}

	movePiece(from_x: number, from_y: number, to_x: number, to_y: number) { ChessBoard.movePiece(from_x, from_y, to_x, to_y, this); }
	static movePiece(from_x: number, from_y: number, to_x: number, to_y: number, board: ChessBoard) {
		if (!board) return undefined;

		const from_tile = board.getTile(from_x, from_y);
		const to_tile = board.getTile(to_x, to_y);

		if (!from_tile || !to_tile) return undefined;

		to_tile.move_index = from_tile.move_index + 1;

		to_tile.piece = from_tile.piece;
		from_tile.piece = "  ";

		board.calculateScores();
	}

	setPiece(pos: v2, piece: PieceType) {
		const tile = this.getTile(pos.x, pos.y);
		if (!tile) return;

		tile.piece = piece;
	}

	destroyPiece(pos: v2) {
		const tile = this.getTile(pos.x, pos.y);
		if (!tile) return;

		tile.piece = "  ";
		tile.move_index = 0;
	}

	moveAdditionalPiece(from_x: number, from_y: number, to_x: number, to_y: number) {
		const from_tile = this.getTile(from_x, from_y);
		const to_tile = this.getTile(to_x, to_y);

		if (!from_tile || !to_tile) return undefined;

		to_tile.move_index = from_tile.move_index + 1;
		to_tile.piece = from_tile.piece;
		from_tile.piece = "  ";

		this.calculateScores();
	}
}


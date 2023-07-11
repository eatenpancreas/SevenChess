import { ChessTile } from '$lib/ts-components/chess-components/ChessTile';
import { default_chessboard_tiles } from '$lib/ts-components/chess-components/DefaultChessBoard';

export class ChessBoard {
	height = 8;
	width = 8;
	tiles: ChessTile[] = [];

	constructor() {
		default_chessboard_tiles.map(default_tile => {
			this.tiles.push(new ChessTile(default_tile));
		});
	}

	getTile(x: number, y: number): ChessTile {
		const index = x + y * this.width;
		return this.tiles[index];
	}
}


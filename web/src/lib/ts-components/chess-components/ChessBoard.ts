import { ChessTile } from '$lib/ts-components/chess-components/ChessTile';
import { default_chessboard_tiles } from '$lib/ts-components/chess-components/DefaultChessBoard';

export class ChessBoard {
	tiles: ChessTile[] = [];

	constructor() {
		default_chessboard_tiles.map(default_tile => {
			this.tiles.push(new ChessTile(default_tile));
		});
	}
}


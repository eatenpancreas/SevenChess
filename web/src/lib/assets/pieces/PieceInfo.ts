
import type { PieceInfo } from '$lib/types/chess/PieceInfo';

import King from '$lib/assets/pieces/info/King';
import Queen from '$lib/assets/pieces/info/Queen';
import Pawn from '$lib/assets/pieces/info/Pawn';
import Rook from '$lib/assets/pieces/info/Rook';
import Bishop from '$lib/assets/pieces/info/Bishop';
import Knight from '$lib/assets/pieces/info/Knight';

const pieceInfo: PieceInfo[] = [
	King, Queen, Rook, Bishop, Knight, Pawn,
]

export default pieceInfo;
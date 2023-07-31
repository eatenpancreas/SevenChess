import type { Destination, v2 } from '$lib/types/chess/Main';
import type { MoveRules, PieceType } from '$lib/types/chess/PieceInfo';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';
import { addV2, equalsV2 } from '$lib/ts-components/math/V2Lib';

export default class MoveDefines {
	destinations: &Destination[];
	rules: MoveRules;
	origin: v2;
	board: ChessBoard;
	piece: PieceType;
	move_dir: v2;
	move_position: v2;

	constructor(
		destinations: &Destination[], rules: MoveRules, origin: v2, board: ChessBoard, piece: PieceType, move_dir: v2
	) {
		this.destinations = destinations;
		this.rules = rules;
		this.origin = origin;
		this.board = board;
		this.piece = piece;
		this.move_dir = move_dir;
		this.move_position = this.dir(move_dir);
	}

	public disabledByCustomMoveRule(): boolean {
		if (!this.rules.customMoveRule) return false;

		const index = this.board.getTile(this.origin.x, this.origin.y)?.move_index;
		if (index === undefined) return false;

		// results in no destination if custom rule is returned false
		return !this.rules.customMoveRule({
			moveIndex: index,
		});
	}

	public hasOccupiedPaths(): boolean {
		let isOccupied = false;
		if (!this.rules.needsPath) return false;

		this.rules.needsPath.map(path => {
			const pos = this.dir(path);
			if (this.board.isOccupied(pos.x, pos.y)) isOccupied = true;
		})

		return isOccupied
	}
	public doChannelListen(): boolean {
		const listener = this.rules.listensToChannel;
		if (!listener) return false;

		const anyChannels = this.board.move_channels.find(channel => {
			return channel.name === listener.name;
		})

		if (!anyChannels) return false;
		if (!equalsV2(anyChannels.position, this.dir(listener.position) )) return false;

		listener.action({
			destroy: (position: v2) => {
				this.board.destroyPiece(this.dir(position));
			},
			move: (from: v2, to: v2) => {
				this.add_destination({
					position: this.dir(to),
					type: "MOVE",
					from_position: this.dir(from),
					piece_type: this.piece,
				});
			}
		})
		return true;
	}

	public isFriendly(): boolean {
		return !this.board.isOpponent(this.move_position.x, this.move_position.y, this.piece);
	}


	public doCastling(): boolean {
		if (!this.rules.castlingRights) return false;

		const castling = this.rules.castlingRights;

		const t = this.dir(castling.otherPosition);
		const otherTile = this.board.getTile(t.x, t.y);
		if (!otherTile) return false;

		if (otherTile.piece.substr(0, 1) !== castling.otherPiece
			|| !castling.otherCustomMoveRule({ moveIndex: otherTile.move_index })) return false;

		this.add_destination({
			position: this.dir(this.move_dir),
			type: "CASTLE",
			from_position: this.origin,
			piece_type: this.piece,
			additional_movements: [{
				position: this.dir(castling.otherLandingSquare),
				type: "CASTLE",
				from_position: this.dir(castling.otherPosition),
				piece_type: otherTile.piece,
			}]
		})

		return true;
	}

	public doCapture(): boolean {
		if (this.rules.canNotCapture) return false;

		const pos = this.dir(this.move_dir);
		if (!this.board.isOccupied(pos.x, pos.y)) return false;

		this.add_destination({
			position: this.dir(this.move_dir),
			type: "CAPTURE",
			from_position: this.origin,
			piece_type: this.piece,
		});
		return true;
	}

	public doRegularMove(): boolean {
		if (this.rules.canNotMove) return false;

		const pos = this.dir(this.move_dir);
		if (this.board.isOccupied(pos.x, pos.y)) return false;

		this.add_destination({
			position: pos,
			type: "MOVE",
			from_position: this.origin,
			piece_type: this.piece,
		});
		return true;
	}

	add_destination(destination: Destination) {
		if (this.rules.createsChannel) {
			destination.creates_channel = {
				position: this.dir(this.move_dir),
				name: this.rules.createsChannel,
			}
		}
		this.destinations.push(destination);
	}

	dir(dir: v2) {
		if (this.piece.substr(1, 1) === "d")
		{ return { x: this.origin.x + dir.x, y: this.origin.y - dir.y }; }

		return addV2(this.origin, dir);
	}
}

//
// export function hasUnsafePaths(
// 	rules: MoveRules, x: number, y: number, board: ChessBoard, piece: PieceType
// ): boolean {
// 	let isUnsafe = false;
// 	if (rules.needsSafeSquares) {
// 		rules.needsSafeSquares.map(path => {
// 			const pos = addDir({ x: x, y: y }, path.x, path.y, piece);
// 			if (pos && board.isUnsafe(pos.x, pos.y)) isUnsafe = true;
// 		})
// 	}
// 	return isUnsafe
// }

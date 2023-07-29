import type { Destination, v2 } from '$lib/types/chess/Main';
import { type Writable, writable } from 'svelte/store';
import { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';

export const board: Writable<ChessBoard> = writable(new ChessBoard());
export const selected: Writable<v2 | null> = writable(null);
export const destinations: Writable<Destination[]> = writable([]);
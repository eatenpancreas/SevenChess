import type { Destination, v2 } from '$lib/types/chess/Main';
import { type Writable, writable } from 'svelte/store';
import type { ChessBoard } from '$lib/ts-components/chess-components/ChessBoard';

export const board: Writable<ChessBoard | null> = writable(null);
export const selected: Writable<v2 | null> = writable(null);
export const destinations: Writable<Destination[]> = writable([]);
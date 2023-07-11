import type { v2 } from '$lib/types/chess/Main';
import { type Writable, writable } from 'svelte/store';

export const selected: Writable<v2> = writable(null);
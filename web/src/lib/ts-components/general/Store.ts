import type { Writable } from 'svelte/store';


export function subscribeAssign<ReturnType, StoreType>(
	store: Writable<StoreType>,
	default_value: ReturnType,
	onDestroy: (fn: () => void) => void,
	returnFunc: (store_result: StoreType) => ReturnType,
) {
	let assignment = default_value;
	const unsub = store.subscribe((store_result) => {
		assignment = returnFunc(store_result);
	});
	onDestroy(unsub);
	return assignment;
}
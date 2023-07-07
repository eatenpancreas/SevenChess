
export function tileColor(x: number, y: number) {
	if ((x + y) % 2 === 0) { return "bg-red-200" }
	else { return "bg-teal-500" }
}

export function numToLetter(num: number) {
	switch (num) {
		case 0: return "a"
		case 1: return "b"
		case 2: return "c"
		case 3: return "d"
		case 4: return "e"
		case 5: return "f"
		case 6: return "g"
		case 7: return "h"
		default: return "a"
	}
}
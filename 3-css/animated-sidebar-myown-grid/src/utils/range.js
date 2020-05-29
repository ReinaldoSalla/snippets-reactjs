export function* iterRange(current, end) {
	yield current;
	if (current === end) return;
	yield* iterRange(current + 1, end);
}

export function range(start=0, end) {
	return [...iterRange(start, end)];
}

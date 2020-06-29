export function* genRange(current, increment, end) {
	if (current === end) return;
	yield current;
	yield* genRange(current + increment, increment, end);
}

export function range(arg1, arg2, arg3) {
	if (!arg2 && !arg3) return [...genRange(0, 1, arg1)];
	else if (!arg3) return [...genRange(arg1, 1, arg2)];
	else return [...genRange(arg1, arg2, arg3)];
}
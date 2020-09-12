const moveToNextItem = (state) => {
	let newIndex = state.index + 1;
	if (newIndex === 4) newIndex = 0; // couroselItems.length
	return {
		index: newIndex,
		isTimerEnabled: true,
	};
};

const moveToFirstItem = () => ({
	index: 0,
	isTimerEnabled: false,
});

const moveToSecondItem = () => ({
	index: 1,
	isTimerEnabled: false,
});

const moveToThirdItem = () => ({
	index: 2,
	isTimerEnabled: false,
});

const moveToForthItem = () => ({
	index: 3,
	isTimerEnabled: false,
});

export {
	moveToNextItem,
	moveToFirstItem,
	moveToSecondItem,
	moveToThirdItem,
	moveToForthItem,
};

import { ACTION_TYPES } from './Courosel.constants';

interface CouroselContainerProps {
	height: string;
}

interface CouroselInputsWrapperProps {
	paddingTop: string;
}

interface CouroselState {
	index: number;
	isTimerEnabled: boolean;
}

interface MoveToNextItem {
	type: typeof ACTION_TYPES.MOVE_TO_NEXT_ITEM;
}

interface MoveToFirstItem {
	type: typeof ACTION_TYPES.MOVE_TO_FIRST_ITEM;
}

interface MoveToSecondItem {
	type: typeof ACTION_TYPES.MOVE_TO_SECOND_ITEM;
}

interface MoveToThirdItem {
	type: typeof ACTION_TYPES.MOVE_TO_THIRD_ITEM;
}

interface MoveToForthItem {
	type: typeof ACTION_TYPES.MOVE_TO_FORTH_ITEM;
}

type CouroselAction =
	| MoveToNextItem
	| MoveToFirstItem
	| MoveToSecondItem
	| MoveToThirdItem
	| MoveToForthItem;

export type {
	CouroselContainerProps,
	CouroselInputsWrapperProps,
	CouroselState,
	CouroselAction,
};

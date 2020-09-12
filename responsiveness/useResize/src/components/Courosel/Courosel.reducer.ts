import {
	moveToNextItem,
	moveToFirstItem,
	moveToSecondItem,
	moveToThirdItem,
	moveToForthItem,
} from './Courosel.actions';
import { ACTION_TYPES } from './Courosel.constants';
import { CouroselState, CouroselAction } from './Courosel.types';

const couroselReducer = (
	state: CouroselState,
	action: CouroselAction
): CouroselState => {
	switch (action.type) {
		case ACTION_TYPES.MOVE_TO_NEXT_ITEM:
			return moveToNextItem(state);
		case ACTION_TYPES.MOVE_TO_FIRST_ITEM:
			return moveToFirstItem();
		case ACTION_TYPES.MOVE_TO_SECOND_ITEM:
			return moveToSecondItem();
		case ACTION_TYPES.MOVE_TO_THIRD_ITEM:
			return moveToThirdItem();
		case ACTION_TYPES.MOVE_TO_FORTH_ITEM:
			return moveToForthItem();
		default:
			return state;
	}
};

export default couroselReducer;

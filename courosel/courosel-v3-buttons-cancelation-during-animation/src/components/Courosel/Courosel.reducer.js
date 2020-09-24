import CONSTANTS from './Courosel.constants';
import {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  freeAllButtons,
  lockOnFirstButton,
  lockOnSecondButton,
  lockOnThirdButton
} from './Courosel.actions';

const couroselReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.MOVE_TO_FIRST_ITEM:
      return moveToFirstItem(state);
    case CONSTANTS.MOVE_TO_SECOND_ITEM:
      return moveToSecondItem(state);
    case CONSTANTS.MOVE_TO_THIRD_ITEM:
      return moveToThirdItem(state);
    case CONSTANTS.FREE_ALL_BUTTONS:
      return freeAllButtons(state);
    case CONSTANTS.LOCK_ON_FIRST_BUTTON:
      return lockOnFirstButton(state);
    case CONSTANTS.LOCK_ON_SECOND_BUTTON:
      return lockOnSecondButton(state);
    case CONSTANTS.LOCK_ON_THIRD_BUTTON:
      return lockOnThirdButton(state);
    default:
      return Error(`Action type '${action.type}' is not defined`);
  }
};

export default couroselReducer;
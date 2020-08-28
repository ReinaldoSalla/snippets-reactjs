import { ACTIONS } from './HomePage.constants';
import {
  scrollToReference,
  setJavaScriptOffsetTop,
  setTypeScriptOffsetTop,
  setReactOffsetTop,
  setGraphQLOffsetTop
} from './HomePage.actions';

const homePageReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SCROLL_TO_REFERENCE:
      return scrollToReference(state, action.payload);
    case ACTIONS.SET_JAVASCRIPT_OFFSET_TOP:
      return setJavaScriptOffsetTop(state, action.payload);
    case ACTIONS.SET_TYPESCRIPT_OFFSET_TOP:
      return setTypeScriptOffsetTop(state, action.payload);
    case ACTIONS.SET_REACT_OFFSET_TOP:
      return setReactOffsetTop(state, action.payload);
    case ACTIONS.SET_GRAPHQL_OFFSET_TOP:
      return setGraphQLOffsetTop(state, action.payload);
    default:
      throw new Error(
        `Action type ${action.type} not defined in homePageReducer`
      );
  }
};

export default homePageReducer;
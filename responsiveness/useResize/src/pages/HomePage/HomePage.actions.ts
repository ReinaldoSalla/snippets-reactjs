import { GENERAL_OFFSET } from './HomePage.constants';

const scrollToReference = (state, payload) => {
	switch (payload.target.getAttribute('name')) {
		case 'javascript':
			window.scroll({ top: state.javascriptOffsetTop, behavior: 'auto' });
			break;
		case 'typescript':
			window.scroll({ top: state.typescriptOffsetTop, behavior: 'auto' });
			break;
		case 'react':
			window.scroll({ top: state.reactOffsetTop, behavior: 'auto' });
			break;
		case 'graphql':
			window.scroll({ top: state.graphqlOffsetTop, behavior: 'auto' });
			break;
		default:
			throw new Error(
				`Name ${payload.target.getAttribute('name')} is undefined`
			);
	}
	return { ...state };
};

const setJavaScriptOffsetTop = (state, payload) => {
	const offsetTop = payload ? payload.offsetTop : 0;
	return {
		...state,
		javascriptOffsetTop: offsetTop - GENERAL_OFFSET,
	};
};

const setTypeScriptOffsetTop = (state, payload) => {
	const offsetTop = payload ? payload.offsetTop : 0;
	return {
		...state,
		typescriptOffsetTop: offsetTop - GENERAL_OFFSET,
	};
};

const setReactOffsetTop = (state, payload) => {
	const offsetTop = payload ? payload.offsetTop : 0;
	return {
		...state,
		reactOffsetTop: offsetTop - GENERAL_OFFSET,
	};
};

const setGraphQLOffsetTop = (state, payload) => {
	const offsetTop = payload ? payload.offsetTop : 0;
	return {
		...state,
		graphqlOffsetTop: offsetTop - GENERAL_OFFSET,
	};
};

export {
	scrollToReference,
	setJavaScriptOffsetTop,
	setTypeScriptOffsetTop,
	setReactOffsetTop,
	setGraphQLOffsetTop,
};

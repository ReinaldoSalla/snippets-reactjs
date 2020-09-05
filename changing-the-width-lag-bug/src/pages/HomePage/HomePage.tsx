import React, { useReducer, useCallback, useEffect } from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import { Route } from 'react-router-dom';
import homePageReducer from './HomePage.reducer';
import { ACTIONS } from './HomePage.constants';
import useResize from '../../utils/useWidth';

const HomePage = () => {
	const height = useResize();
	const [, dispatch] = useReducer(homePageReducer, {
		javascriptOffsetTop: 0,
		typescriptOffsetTop: 0,
		reactOffsetTop: 0,
		graphqlOffsetTop: 0,
	});

	const handleClick = (event) => {
		dispatch({
			type: ACTIONS.SCROLL_TO_REFERENCE,
			payload: event,
		});
	};

	// const javaScriptRef = useCallback(
	// 	(node) => {
	// 		dispatch({
	// 			type: ACTIONS.SET_JAVASCRIPT_OFFSET_TOP,
	// 			payload: node,
	// 		});
	// 	},
	// 	[]
	// );

	// const typeScriptRef = useCallback(
	// 	(node) => {
	// 		dispatch({
	// 			type: ACTIONS.SET_TYPESCRIPT_OFFSET_TOP,
	// 			payload: node,
	// 		});
	// 	},
	// 	[]
	// );

	// const reactRef = useCallback(
	// 	(node) => {
	// 		dispatch({
	// 			type: ACTIONS.SET_REACT_OFFSET_TOP,
	// 			payload: node,
	// 		});
	// 	},
	// 	[]
	// );

	// const graphQLRef = useCallback(
	// 	(node) => {
	// 		dispatch({
	// 			type: ACTIONS.SET_GRAPHQL_OFFSET_TOP,
	// 			payload: node,
	// 		});
	// 	},
	// 	[]
	// );

	return (
		<Route path="/" exact>
			<Video />
			<Courosel handleClick={handleClick}/>
			<Categories

			/>
		</Route>
	);
};

export default HomePage;
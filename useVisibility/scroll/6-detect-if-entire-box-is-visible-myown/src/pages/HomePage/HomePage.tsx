import React, { useReducer, useCallback, useEffect } from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import Video from '../../components/Video';
import { Route } from 'react-router-dom';
import homePageReducer from './HomePage.reducer';
import { ACTIONS } from './HomePage.constants';
import useHeight from '../../utils/useHeight';

const HomePage = () => {
	const height = useHeight();
	const [_, dispatch] = useReducer(homePageReducer, {
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

	const javaScriptRef = useCallback(
		(node) => {
			dispatch({
				type: ACTIONS.SET_JAVASCRIPT_OFFSET_TOP,
				payload: node,
			});
		},
		[height]
	);

	const typeScriptRef = useCallback(
		(node) => {
			dispatch({
				type: ACTIONS.SET_TYPESCRIPT_OFFSET_TOP,
				payload: node,
			});
		},
		[height]
	);

	const reactRef = useCallback(
		(node) => {
			dispatch({
				type: ACTIONS.SET_REACT_OFFSET_TOP,
				payload: node,
			});
		},
		[height]
	);

	const graphQLRef = useCallback(
		(node) => {
			dispatch({
				type: ACTIONS.SET_GRAPHQL_OFFSET_TOP,
				payload: node,
			});
		},
		[height]
	);

	return (
		<Route path="/" exact>
			<Video />
			<Courosel handleClick={handleClick} />
			<Categories
				javaScriptRef={javaScriptRef}
				typeScriptRef={typeScriptRef}
				reactRef={reactRef}
				graphQLRef={graphQLRef}
			/>
		</Route>
	);
};

export default HomePage;

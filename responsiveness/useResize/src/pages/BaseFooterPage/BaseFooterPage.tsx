import React, { useEffect } from 'react';
import { Wrapper } from './BaseFooterPage.styles';
import useResize from '../../utils/useResize';

const BaseFooterPage = () => {
	const { height } = useResize();
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<Wrapper height={`${height}px`}>
			<h1>About</h1>
			<p>
				React makes it painless to create interactive UIs. Design simple views
				for each state in your application, and React will efficiently update
				and render just the right components when your data changes.
			</p>
		</Wrapper>
	);
};

export default BaseFooterPage;

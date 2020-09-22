import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Wrapper = styled(animated.div)`
	margin: 0 20px;
	padding-top: 80px;
`;

const Title = styled.h1`
	text-align: center;
`;

const Paragraph = styled.p`
	margin: 25px 0;
	line-height: 1.7;
`;

const promisesContents = [
	'Setup',
	'Callback Hell',
	'Building a Promise',
	'Calling a Single Promise',
	'Calling Promises in Sequence',
	'Calling Promises in Parallel',
	'Promise.allSettled',
	'Promise.race',
];

const BaseContentPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const animation = useSpring({
		from: {
			opacity: 0,
			transform: 'translateX(-10%)',
		},
		to: {
			opacity: 1,
			transform: 'translateX(0%)',
		},
	});
	return (
		<Wrapper style={animation}>
			<h1> React - Rendering </h1>
			<h2>1. Setup</h2>
			<Paragraph>
				Note: if you already have a method for executing react programs, you may
				skip the setup Concurrent Mode fixes this fundamental limitation by
				making rendering interruptible. This means when the user presses another
				key, React doesn’t need to block the browser from updating the text
				input. Instead, it can let the browser paint an update to the input, and
				then continue rendering the updated list in memory. When the rendering
				is finished, React updates the DOM, and changes are reflected on the
				screen.
			</Paragraph>
			<h2>2. Calling promises in parallel</h2>
			<Paragraph>
				Concurrent Mode fixes this fundamental limitation by making rendering
				interruptible. This means when the user presses another key, React
				doesn’t need to block the browser from updating the text input. Instead,
				it can let the browser paint an update to the input, and then continue
				rendering the updated list in memory. When the rendering is finished,
				React updates the DOM, and changes are reflected on the screen.
			</Paragraph>
			<Paragraph>
				Concurrent Mode fixes this fundamental limitation by making rendering
				interruptible. This means when the user presses another key, React
				doesn’t need to block the browser from updating the text input. Instead,
				it can let the browser paint an update to the input, and then continue
				rendering the updated list in memory. When the rendering is finished,
				React updates the DOM, and changes are reflected on the screen.
			</Paragraph>
			<Paragraph>
				Concurrent Mode fixes this fundamental limitation by making rendering
				interruptible. This means when the user presses another key, React
				doesn’t need to block the browser from updating the text input. Instead,
				it can let the browser paint an update to the input, and then continue
				rendering the updated list in memory. When the rendering is finished,
				React updates the DOM, and changes are reflected on the screen.
			</Paragraph>
			<Paragraph>
				Concurrent Mode fixes this fundamental limitation by making rendering
				interruptible. This means when the user presses another key, React
				doesn’t need to block the browser from updating the text input. Instead,
				it can let the browser paint an update to the input, and then continue
				rendering the updated list in memory. When the rendering is finished,
				React updates the DOM, and changes are reflected on the screen.
			</Paragraph>
			<Paragraph>
				Concurrent Mode fixes this fundamental limitation by making rendering
				interruptible. This means when the user presses another key, React
				doesn’t need to block the browser from updating the text input. Instead,
				it can let the browser paint an update to the input, and then continue
				rendering the updated list in memory. When the rendering is finished,
				React updates the DOM, and changes are reflected on the screen.
			</Paragraph>
		</Wrapper>
	);
};

export default BaseContentPage;

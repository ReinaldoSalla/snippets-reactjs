import React from "react";

let childCount = 0;
let nCalls = 0;

const Child = () => {

	React.useEffect(() => {
		childCount++;
	});

	nCalls++;
	console.log(`Child component call #${nCalls}`);

	return (
		<h2>childCount: {childCount}</h2>
	);
};

export default Child;
import React from "react";

export default function Cars(props) {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Price: ${props.price}</p>
			<button onClick={props.incrementPrice}>&uarr;</button>
			<button onClick={props.decrementPrice}>&darr;</button>
		</div>
	);
}


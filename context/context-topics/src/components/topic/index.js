import React from "react";

export default function Topic(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			<p>{props.duration}</p>
		</div>
	);
}
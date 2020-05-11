import React from "react";
import "./App.css";

function* genRange(current, increment, end) {
	if (current === end) return;
	yield current;
	yield* genRange(current + increment, increment, end);
}

function range(arg1, arg2, arg3) {
	if (!arg2 && !arg3) return [...genRange(0, 1, arg1)];
	else if (!arg3) return [...genRange(arg1, 1, arg2)];
	else return [...genRange(arg1, arg2, arg3)];
}

function Divs(props) {
	return range(props.n).map(num => 
		<div key={num}>content#{num + 1}</div>
	);
}

export default function App() {
	return (
		<div className="container">
			<Divs n={1e3}/>
		</div>
	);
}
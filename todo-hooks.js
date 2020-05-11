import React, { useState } from "react";

export default function App() {
	const [items, setItems] = useState([]);
	const [text, setText] = useState("");
	return (
		<div>
			<form onSubmit={(event) => {
				event.preventDefault();
				setItems(items.concat(text));
				setText("");
			}}>
				<label>What needs to be done?</label>
				<input value={text} onChange={(event) => {
					setText(event.target.value);
				}}/>
				<button> Add#{items.length+1}</button>
			</form>
			<ul>
				{items.map((item, index) => 
				  <li key={index}>{item}</li>
				)}
			</ul>
		</div>
	);
}


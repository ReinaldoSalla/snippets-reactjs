import React, { useState } from "react";

export default function App() {
	const [name, setName] = useState("Reinaldo");
	const [age, setAge] = useState(25);
	return (
		<div>
			<label>
				Name:
				<input value={name} onChange={(event) => {
					setName(event.target.value);
				}}/>
			</label>
			<button onClick={() => setAge(age+1)}>Increase Age</button>
			<br /> <br />
			<h1> Mr. {name} is {age} years old.</h1>
		</div>
	);
}


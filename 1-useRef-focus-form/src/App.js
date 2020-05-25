import React from "react";
import "./App.css";

/*
const App = () => {
	const nameRef = React.useRef(null);
	const [name, setName] = React.useState("");
	const [age, setAge] = React.useState("");
	const [profession, setProfession] = React.useState("");

	React.useEffect(() => {
		nameRef.current.focus();
	}, []);

	const onSubmit = (event) => {
		event.preventDefault();
		alert(name);
		setName("");
		setAge("");
		setProfession("");
		nameRef.current.focus();
	};

	return (
		<form id="form-flexbox">
			<label>
				Name:
				<input 
					placeholder="reinaldo" 
					ref={nameRef}
					value={name}
					onChange={event => setName(event.target.value)}
				/>
			</label>
			<label>
				Age:
				<input 
					placeholder="25"
					value={age}
					onChange={event => setAge(event.target.value)}
				/>
			</label>
			<label>
				Profession:
				<input 
					placeholder="developer" 
					value={profession}
					onChange={event => setProfession(event.target.value)}
				/>
			</label>
			<button
				onKeyDown={onSubmit}
			>
				Submit Data
			</button>
		</form>
	);
};
*/

const reducer = (state, action) => {

};

const initialState = {
	name: "",
	age: "",
	profession: ""
};

const init = () => initialState;

const App = () => {
	const [state, dispatch] = React.useReducer(
		reducer,
		initialState,
		init
	);
	const nameRef = React.useRef(null);

	React.useEffect(() => {
		nameRef.current.focus();
	}, []);

	return (
		<label>
			Name:
			<input
				placeholder="reinaldo"
				ref={nameRef}
				value={state.name}
			/>
		</label>
	);
};



export default App;
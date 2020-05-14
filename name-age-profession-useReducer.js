import React from "react";


function reducer(state, action) {
	switch (action.type) {
		case "changeName":
			return { ...state, name: action.payload };
		case "increaseAge":
			return { ...state, age: state.age + 1}
		case "decreaseAge":
			return { ...state, age: state.age - 1};
		case "changeProfession":
			return { ...state, profession: action.payload };
	}
}

export default function App() {
	const [state, dispatch] = React.useReducer(reducer, {
		name: "Reinaldo",
		age: 25,
		profession: "Software Engineer"
	});
	return (
		<React.Fragment>
			<input 
				value={state.name}
				onChange={(event) => 
					dispatch({ 
						type: "changeName", 
						payload: event.target.value 
					})
				}	
			/>	
			<button
				onClick={() => {
					dispatch({
						type: "increaseAge",
					})
				}}
			>
				Increase age
			</button>
			<button
				onClick={() => 
					dispatch({
						type: "decreaseAge",
					})
				}
			>
				Decrease age
			</button>
			<input
				value={state.profession}
				onChange={(event) => 
					dispatch({
						type: "changeProfession",
						payload: event.target.value
					})
				}
			/>
			<h1>Mr. {state.name}. has {state.age} years and it's a {state.profession}</h1>
		</React.Fragment>
	);
}
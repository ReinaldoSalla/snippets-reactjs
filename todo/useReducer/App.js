
import React from "react";

const initialState = {
	items: [],
	text : ""
};

const changeInput = (state, action) => ({
	...state,
	text: action.payload
});

const addItem = (state, action) => {
	return {
		items: [...state.items, action.payload],
		text: ""
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_INPUT":
			return changeInput(state, action);
		case "ADD_ITEM":
			return addItem(state, action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const List = ({ listItems }) => (
	listItems.length 
		?	<ul>{listItems}</ul> 
		: <ul>Empty</ul> 
);

const App = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const inputRef = React.useRef(null); //input focus and "Enter" submission

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onChange = event => dispatch({
		type: "CHANGE_INPUT",
		payload: event.target.value
	});

	const onClick = () => dispatch({
		type: "ADD_ITEM",
		payload: state.text
	});

	const onKeyDown = event => {
		if (event.key === "Enter") 
			dispatch({
				type: "ADD_ITEM",
				payload: state.text
			});
	};

	const listItems = state.items.map((item, index) => 
		<li key={index}>{item}</li>
	);

	return (
		<React.Fragment>
			<input
				value={state.text}
				ref={inputRef}
				onChange={onChange}
				onKeyDown={onKeyDown}
			/>
			<button onClick={onClick}>
				Add TODO
			</button>
			<List listItems={listItems} />
		</React.Fragment>
	);
};

export default App;
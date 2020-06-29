import React from "react";

const NumberContext = React.createContext();

const NumberProvider = ({ children }) => {
	const [count, setCount] = React.useState(0);

	const increment = () => setCount(count + 1);

	const value = { count, increment };

	return (
		<NumberContext.Provider value={value}>
			{children}
		</NumberContext.Provider>
	);
};


const Calculator = () => {
	const { count, increment } = React.useContext(NumberContext);

	return (
		<React.Fragment>
			<button onClick={increment}>add</button>
			<h1>{count}</h1>
		</React.Fragment>
	);
};

const Interface = () => {
	const { count } = React.useContext(NumberContext);

	return (
		<Calculator />
	);

};

const App = () => {
	
	return (
		<NumberProvider>
			<Interface />
		</NumberProvider>
	);
};

export default App;
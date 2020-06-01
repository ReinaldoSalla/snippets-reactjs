import React from "react";
import "./App.css";

const TopBar = () => {
	const tops = Array(5).fill(0).map((_, index) => 
		<div className="top-bar-item" key={index}>Top #{index + 1}</div>
	)
	return (
		<div className="top-bar">
			{tops}
		</div>
	);
};

const Divs = () => {
	const contents = Array(100).fill(0).map((_, index) => 
		<div key={index}>Content #{index + 1}</div>
	);
	return (
		<div className="content">
			{contents}
		</div>
	);
};

const App = () => {

	return (
		<React.Fragment>
			<TopBar />
			<Divs />
		</React.Fragment>
	);
};

export default App;
import React from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

const App = () => {
	const [isMsgVisible, setIsMsgVisible] = React.useState(false);

	const toggleMsg = () => setIsMsgVisible(!isMsgVisible);

	return (
		<React.Fragment>
			<button onClick={toggleMsg}>
				Toggle msg
			</button>
			<CSSTransition
				in={isMsgVisible}
				timeout={3000}
				classNames="msg"
				unmountOnExit
			>
				<h1>
					This msg is being transitioned in and out of the DOM
				</h1>
			</CSSTransition>
		</React.Fragment>
	);
};

/*
const App = () => {
	const [isMsgVisible, setIsMsgVisible] = React.useState(false);
	const msgClassName = isMsgVisible ? "msg-on" : "msg-off";

	const toggleMsg = () => setIsMsgVisible(!isMsgVisible);

	return (
		<React.Fragment>
			<button onClick={toggleMsg}>
				Toggle msg
			</button>
			<h1 id={msgClassName}>
				This msg is being transitioned in and out of the DOM
			</h1>
		</React.Fragment>
	);
};
*/

export default App;
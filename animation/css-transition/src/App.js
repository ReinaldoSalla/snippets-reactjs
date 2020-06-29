import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import "./App.css";

export default function App() {
	const [isActive, setIsActive] = React.useState(false);
	return (
		<React.Fragment>
			<BsReverseLayoutTextSidebarReverse
				className="icon"
				onClick={() => setIsActive(!isActive)}
			/>
			<ul className={isActive ? "list-on" : "list-off"}>
				<li>a</li>
				<li>b</li>
				<li>c</li>
			</ul>
		</React.Fragment>
	)
}
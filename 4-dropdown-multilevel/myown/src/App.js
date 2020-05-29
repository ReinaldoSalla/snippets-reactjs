import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import "./App.css";

const NavBar = ({ children }) => (
	<nav className="nav-bar">
		<ul className="nav-list">
			{children}
		</ul>
	</nav>
);

const NavElement = ({ children, icon }) => {
	const [isOpen, setIsOpen] = React.useState(true);

	const toggle = () => setIsOpen(!isOpen);

	/*
	Simple component do test if NavElement receives 
	children and if isOpen is set to true.
	Alternative for writing { isOpen && children } 
	directly inside the return.
	*/
	const Children = () => (
		children && isOpen ? children : null
	);

	return (
		<li className="nav-element">
			<a 
				href="/#"
				className="nav-link"
				onClick={toggle}
			>
				{icon}
			</a>
			<Children />
		</li>
	);
};

const DropDownMenu = () => {

	const DropDownItem = ({ children, leftIcon, rightIcon, goToMenu }) => {

		return (
			<a
				href="/#"
				className="menu-element"
			>
				<span className="nav-link">{leftIcon}</span>
				<span className="menu-text">{children}</span>
			</a>
		);
	};

	return (
		<div className="dropdown">
			<hr />
			<DropDownItem leftIcon={<BellIcon />}>
				JavaScript
			</DropDownItem>
			<hr />
			<DropDownItem leftIcon={<BellIcon />}>
				NodeJS
			</DropDownItem>
			<hr />
			<DropDownItem leftIcon={<BellIcon />}>
				ReactJS
			</DropDownItem>
			<hr />
		</div>
	);
};


const App = () => (
	<NavBar>
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />}>
			<DropDownMenu/>
		</NavElement>
	</NavBar>
);

export default App;
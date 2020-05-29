import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import "./App.css";

const NavBar = ({ children }) => (
	<nav className="navbar">
		<ul className="navbar-nav">
			{children}
		</ul>
	</nav>
);

const NavElement = ({ children, icon }) => {
	const [isOpen, setIsOpen] = React.useState(true);

	const toggle = () => setIsOpen(!isOpen);

	const Children = () => (
		children && isOpen ? children : null
	);

	return (
		<li className="nav-item">
			<a className="icon-button" onClick={toggle}>
				{icon}
			</a>
			<Children />
		</li>
	);
}

const DropDownMenu = () => {

	const DropDownItem = ({ children, leftIcon, rightIcon, goToMenu }) => {
		const [activeMenu, setActiveMenu] = React.useState("main");

		return (
			<a
				href="/#"
				className="menu-item"
			>
				<span className="icon-button">{leftIcon}</span>
				<span className="menu-text">{children}</span>
			</a>
		);
	};

	/**
	How to have full slide control?
	**/
	return (
		<div className="dropdown">
			<div className="menu-primary">
				<DropDownItem leftIcon={<BellIcon />}>
					JavaScript
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Node
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					React
				</DropDownItem>
			</div>
			<div className="menu-javascript">
				<DropDownItem leftIcon={<BellIcon />}>
					Closures
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Async-Await
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Callbacks
				</DropDownItem>
			</div>
		</div>
	);
};

const App = () => (
	<NavBar>
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />} />
		<NavElement icon={<BellIcon />}>
			<DropDownMenu />
		</NavElement>
	</NavBar>
);

export default App;
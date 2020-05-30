import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
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
			<a href ="/#" className="icon-button" onClick={toggle}>
				{icon}
			</a>
			<Children />
		</li>
	);
}

const DropDownMenu = () => {
	const [menus, setMenus] = React.useState({
		primary: "primary-on",
		javascript: "javascript-off",
		react: "react-off",
		node: "node-off"
	});

	const setPrimary = () => setMenus({
		primary: "primary-on",
		javascript: "javascript-off",
		react: "react-off",
		node: "node-off"
	});

	const setJavaScript = () => setMenus({
		primary: "primary-off",
		javascript: "javascript-on",
		react: "react-off",
		node: "node-off"
	});

	const setReact = () => setMenus({
		primary: "primary-off",
		javascript: "javascript-off",
		react: "react-on",
		node: "node-off"
	});

	const setNode = () => setMenus({
		primary: "primary-off",
		javascript: "javascript-off",
		react: "react-off",
		node: "node-on"
	})

	const DropDownItem = ({ children, leftIcon, rightIcon, menu }) => {

		return (
			<a
				href="/#"
				className="menu-item"
				onClick={menu}
			>
				<span className="icon-button">{leftIcon}</span>
				<span className="menu-text">{children}</span>
			</a>
		);
	};

	return (
		<div className="dropdown">
			<div className={menus.primary}>
				<DropDownItem leftIcon={<PlusIcon />} menu={setJavaScript}>
					JavaScript
				</DropDownItem>
				<DropDownItem leftIcon={<PlusIcon />} menu={setReact}>
					React
				</DropDownItem>
				<DropDownItem leftIcon={<PlusIcon />} menu={setNode}>
					Node
				</DropDownItem>
			</div>
			<div className={menus.javascript}>
				<DropDownItem leftIcon={<ArrowIcon />} menu={setPrimary}>
					Return
				</DropDownItem>
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
			<div className={menus.react}>
				<DropDownItem leftIcon={<ArrowIcon />} menu={setPrimary}>
					Return
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					useMemo
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Redux
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					React-Typescript
				</DropDownItem>
			</div>
			<div className={menus.node}>
				<DropDownItem leftIcon={<ArrowIcon />} menu={setPrimary}>
					Return
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Auth
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					Mongo Driver
				</DropDownItem>
				<DropDownItem leftIcon={<BellIcon />}>
					GraphQL
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
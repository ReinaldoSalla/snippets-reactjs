import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { AiOutlineArrowRight } from "react-icons/ai"; 
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrow90DegRight } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

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
	const [menuHeight, setMenuHeight] = React.useState(null);
	const dropdownRef = React.useRef(null);
	const primaryRef = React.useRef(null);
	const javascriptRef = React.useRef(null);
	const reactRef = React.useRef(null);
	const nodeRef = React.useRef(null);

	React.useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	const setPrimary = () => {
		setMenus({
			primary: "primary-on",
			javascript: "javascript-off",
			react: "react-off",
			node: "node-off"
		});
		setMenuHeight(primaryRef.current.offsetHeight);
	};

	const setJavaScript = () => {
		setMenus({
			primary: "primary-off",
			javascript: "javascript-on",
			react: "react-off",
			node: "node-off"
		});
		setMenuHeight(javascriptRef.current.offsetHeight);
	};

	const setReact = () => {
		setMenus({
			primary: "primary-off",
			javascript: "javascript-off",
			react: "react-on",
			node: "node-off"
		});
		setMenuHeight(reactRef.current.offsetHeight);
	};

	const setNode = () => {
		setMenus({
			primary: "primary-off",
			javascript: "javascript-off",
			react: "react-off",
			node: "node-on"
		});
		setMenuHeight(nodeRef.current.offsetHeight);
	};

	const DropDownItem = ({ children, leftIcon, rightIcon, menu }) => (
			<a
				href="/#"
				className="menu-item"
				onClick={menu}
			>
				<span className="icon-button">{leftIcon}</span>
				<span className="menu-text">{children}</span>
				<span className="icon-button button-right">{rightIcon}</span>
			</a>
	);

	return (
		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
			<div className={menus.primary} ref={primaryRef}>
				<DropDownItem 
					leftIcon={<IoLogoJavascript />} 
					rightIcon={<AiOutlineArrowRight />}
					menu={setJavaScript}
				>
					JavaScript
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaReact />} 
					rightIcon={<AiOutlineArrowRight />}
					menu={setReact}
				>
					React
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaNodeJs />} 
					rightIcon={<AiOutlineArrowRight />}
					menu={setNode}
				>
					Node
				</DropDownItem>
			</div>
			<div className={menus.javascript} ref={javascriptRef}>
				<DropDownItem 
					rightIcon={<AiOutlineArrowLeft />}
					leftIcon={<AiOutlineArrowLeft />}
					menu={setPrimary}
				>
					Return
				</DropDownItem>
				<DropDownItem 
					leftIcon={<IoLogoJavascript />}
					rightIcon={<BsArrow90DegRight />}
				>
					Closures
				</DropDownItem>
				<DropDownItem 
					leftIcon={<IoLogoJavascript />}
					rightIcon={<BsArrow90DegRight />}
				>
					AsyncAwa
				</DropDownItem>
				<DropDownItem 
					leftIcon={<IoLogoJavascript />}
					rightIcon={<BsArrow90DegRight />}
				>
					Callbacks
				</DropDownItem>
				<DropDownItem
					leftIcon={<IoLogoJavascript />}
					rightIcon={<BsArrow90DegRight />}
				>
					CallBind
				</DropDownItem>
			</div>
			<div className={menus.react} ref={reactRef}>
				<DropDownItem 
					rightIcon={<AiOutlineArrowLeft />}
					leftIcon={<AiOutlineArrowLeft />}
					menu={setPrimary}
				>
					Return
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaReact />}
					rightIcon={<BsArrow90DegRight />}
				>
					useMemo
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaReact />}
					rightIcon={<BsArrow90DegRight />}
				>
					Redux
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaReact />}
					rightIcon={<BsArrow90DegRight />}
				>
					TypeScript
				</DropDownItem>
			</div>
			<div className={menus.node} ref={nodeRef}>
				<DropDownItem 
					rightIcon={<AiOutlineArrowLeft />}
					leftIcon={<AiOutlineArrowLeft />}
					menu={setPrimary}
				>
					Return
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaNodeJs />}
					rightIcon={<BsArrow90DegRight />}
				>
					Auth
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaNodeJs />}
					rightIcon={<BsArrow90DegRight />}
				>
					Driver
				</DropDownItem>
				<DropDownItem 
					leftIcon={<FaNodeJs />}
					rightIcon={<BsArrow90DegRight />}
				>
					GraphQL
				</DropDownItem>
				<DropDownItem
					leftIcon={<FaNodeJs />}
					rightIcon={<BsArrow90DegRight />}
				>
					Clusters
				</DropDownItem>
				<DropDownItem
					leftIcon={<FaNodeJs />}
					rightIcon={<BsArrow90DegRight />}
				>
					Testing
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
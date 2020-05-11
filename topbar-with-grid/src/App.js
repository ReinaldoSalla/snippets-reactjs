/*
difference between template-areas and not template areas
how to use grid to create a topbar 1x5
how to use grid to create a sidebar 6x3
*/

import React from "react";
import "./App.css";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { AiOutlineLogin } from "react-icons/ai";

function Todo() {
	return <p>todo</p>;
}


function SidebarIcon() {
	return (
		<IconContext.Provider value={{ className: "sidebar-icon" }}>
			<BsReverseLayoutTextSidebarReverse />
		</IconContext.Provider>
	);
}

function CompanyLogo() {
	return (
		<p className="company-logo">CompanyLogo</p>
	)
}

function InputSearch() {
	return (
		<input className="input-search" type="text" placeholder="e.g. T-Shirt Male"/>
	);
}

function LoginIcon() {
	return (
		<IconContext.Provider value={{ className: "login-icon" }}>
			<AiOutlineLogin />
		</IconContext.Provider>
	);
}

function CartIcon() {
	return (
		<IconContext.Provider value={{ className: "cart-icon" }}>
			<FaShoppingCart />
		</IconContext.Provider>
	);
}

function Topbar() {
	return (
		<div className="top-bar-contents">
			<SidebarIcon />
			<CompanyLogo />
			<InputSearch />
			<LoginIcon />
			<CartIcon />
		</div>
	);
}
export default function App() {
	return (
		<div className="container">
			<div className="topbar">
				<Topbar />
			</div>
			<div className="courosel">
				<Todo />
			</div>
			<div className="content">
				<Todo />
			</div>
			<div className="ads">
				<Todo />
			</div>
			<div className="footer">
				<Todo />
			</div>
		</div>
	);
}
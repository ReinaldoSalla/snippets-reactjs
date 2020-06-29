import React from "react";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"
import { AiOutlineLogin } from "react-icons/ai";
import "./index.css";

function SidebarIcon() {
	return (
		<IconContext.Provider value={{ className: "sidebar-icon" }}>
			<BsReverseLayoutTextSidebarReverse />
		</IconContext.Provider>
	);
}

function CompanyLogo() {
	return (
		<p id="company-logo">CompanyLogo</p>
	)
}

function InputSearch() {
	return (
		<input id="input-search" type="text" placeholder="e.g. T-Shirt Male"/>
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

export default function Topbar() {
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
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsLayoutTextSidebar } from "react-icons/bs"
import { AiOutlineLogin } from "react-icons/ai";
import SidebarContext from "../../context/SidebarContext/";
import "./index.css";

function CompanyLogo() {
	return (
		<span className="company-logo">CompanyLogo</span>
	);
}

function InputSearch() {
	return (
		<input className="input-search" type="text" placeholder="e.g. T-Shirt Male"/>
	);
}

export default function Topbar() {
	const { onOff, toggleSidebar } = React.useContext(SidebarContext);
	return (
		<React.Fragment>
			<div className="topbar-grid">
				<BsLayoutTextSidebar 
					className={`sidebar-icon-${onOff}`} 
					onClick={toggleSidebar}
				/>
				<CompanyLogo />
				<InputSearch />
				<AiOutlineLogin className="login-icon" />
				<FaShoppingCart className="cart-icon" />
			</div>
		</React.Fragment>
	);
}
import React from "react";
import Sidebar from "../Sidebar";
import { FaShoppingCart } from "react-icons/fa";
import "./Topbar.css";

const CompanyLogo = () =>
	<span className="company-logo">Company</span>;

const InputSearch = () => (
	<input className="input-search" type="text" placeholder="e.g. T-Shirt Male"/>
);

const Cart = () => (
	<FaShoppingCart className="cart-icon" />
);

const TopBar = ({ sidebarIconClassName, sidebarContentClassName, toggleSidebar }) => (
	<div className="topbar">
		<Sidebar 
      sidebarIconClassName={sidebarIconClassName}
      sidebarContentClassName={sidebarContentClassName}
      toggleSidebar={toggleSidebar}    
    />
		<CompanyLogo />
		<InputSearch />
		{/* <Login /> */}
		<Cart />
	</div>
);

export default TopBar;
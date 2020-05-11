import React from "react";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiLoincloth } from "react-icons/gi"
import { FaCar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import "./App.css";

export default function App() {
	const [isActive, setIsActive] = React.useState(true);
	return (
		<React.Fragment>
			<BsReverseLayoutTextSidebarReverse
				className="icon"
				onClick={() => setIsActive(!isActive)}
			/>
			<ul className={isActive ? "list-on" : "list-off"}>
				<a href="#">
					<li>
						<div className="sidebar-grid">
							<GiSmartphone className="left-sub-icon" />
							<span className="text">Electronics</span>
							<AiOutlineArrowRight className="right-sub-icon" />
						</div>
					</li>
				</a>
				<a href="#">
					<li>
						<div className="sidebar-grid">
							<GiLoincloth className="left-sub-icon" />
							<span className="text">Clothes</span>
							<AiOutlineArrowRight className="right-sub-icon" />
						</div>
					</li>
				</a>
			<a href="#">
				<li>
					<div className="sidebar-grid">
						<FaCar className="left-sub-icon" />
						<span className="text">Cars</span>
						<AiOutlineArrowRight className="right-sub-icon" />
					</div>
				</li>
			</a>
			<a href="#">
				<li>
					<div className="sidebar-grid">
						<FaBuilding className="left-sub-icon" />
						<span className="text">Apartments</span>
						<AiOutlineArrowRight className="right-sub-icon" />
				</div>
				</li>
			</a>
			<a href="#">
				<li>
					<div className="sidebar-grid">
						<GiHouse className="left-sub-icon" />
						<span className="text">Houses</span>
						<AiOutlineArrowRight className="right-sub-icon" />
					</div>
				</li>
			</a>
			<a href="#">
				<li>
					<div className="sidebar-grid">
						<GiIsland className="left-sub-icon" />
						<span className="text">Islands</span>
						<AiOutlineArrowRight className="right-sub-icon" />
					</div>
				</li>
			</a>
			</ul>
		</React.Fragment>
	)
}
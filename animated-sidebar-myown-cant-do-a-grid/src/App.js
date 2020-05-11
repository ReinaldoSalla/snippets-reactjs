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
	const [isActive, setIsActive] = React.useState(false);
	return (
		<React.Fragment>
			<BsReverseLayoutTextSidebarReverse
				className="icon"
				onClick={() => setIsActive(!isActive)}
			/>
			<ul className={isActive ? "list-on" : "list-off"}>
				<div className="container-sidebar">
					<div className="sub-container-sidebar">
						<a href="#">
							<li>
								<GiSmartphone className="left-sub-icon" />
								Electronics
								<AiOutlineArrowRight className="right-sub-icon" />
							</li>
						</a>
					</div>
					<div className="sub-container-sidebar">
						<a href="#">
							<li>
								<GiLoincloth className="left-sub-icon" />
								Clothes
								<AiOutlineArrowRight className="right-sub-icon" />
							</li>
						</a>
					</div>
					<a href="#">
						<li>
							<FaCar className="left-sub-icon" />
							Cars
							<AiOutlineArrowRight className="right-sub-icon" />
						</li>
					</a>
					<a href="#">
						<li>
							<FaBuilding className="left-sub-icon" />
							Apartments
							<AiOutlineArrowRight className="right-sub-icon" />
						</li>
					</a>
					<a href="#">
						<li>
							<GiHouse className="left-sub-icon" />
							Houses
							<AiOutlineArrowRight className="right-sub-icon" />
						</li>
					</a>
					<a href="#">
						<li>
							<GiIsland className="left-sub-icon" />
							Islands
							<AiOutlineArrowRight className="right-sub-icon" />
						</li>
					</a>
				</div>
			</ul>
		</React.Fragment>
	)
}
import React from "react";
import SidebarContext from "../../context/SidebarContext/";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";
import { GiLoincloth } from "react-icons/gi"
import { FaCar } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import "./index.css";

export default function Sidebar() {
	const { onOff } = React.useContext(SidebarContext);
	const listItems = [
		{
			name: "Electronic",
			leftIcon: <GiSmartphone className="left-icon" />,
			text: <span className="text">Eletronics</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon"/>
		},
		{
			name: "Cloth",
			leftIcon: <GiLoincloth className="left-icon" />,
			text: <span className="text">Clothes</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon" />
		},
		{
			name: "Car",
			leftIcon: <FaCar className="left-icon" />,
			text: <span className="text">Cars</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon" />
		},
		{
			name: "Apartment",
			leftIcon: <FaBuilding className="left-icon" />,
			text: <span className="text">Apartments</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon" />
		},
		{
			name: "House",
			leftIcon: <GiHouse className="left-icon" />,
			text: <span className="text">Houses</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon" />
		},
		{
			name: "Island",
			leftIcon: <GiIsland className="left-icon" />,
			text: <span className="text">Islands</span>,
			rightIcon: <AiOutlineArrowRight className="right-icon" />
		}
	];
	return (
		<ul className={`list-${onOff}`}>
			{listItems.map((listItem, index) => 
				<li className="sidebar-list" key={index}>
					<a 
						target="_black" 
						href="https://google.com"
						//title={`${listItem.name}'s link`}
					>
						<div className="sidebar-grid">
							{listItem.leftIcon}
							{listItem.text}
							{listItem.rightIcon}
						</div>
					</a>
				</li>
			)}
		</ul>
	);
}
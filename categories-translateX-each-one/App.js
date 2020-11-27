
import React, { Fragment } from "react";
import { 
	FaCar,
	FaBuilding
} from "react-icons/fa";
import { 
	GiSmartphone,
	GiLoincloth,
	GiHouse,
	GiIsland
} from "react-icons/gi";
import useVisibilityTimeOnce from "../../utils/useVisibility";
import "./Categories.css";

const Title = () => (
	<h2 className="categories-title">
		Browse by categories
	</h2>
);

const Category = ({ text, icon }) => {
  const [isVisible, ref] = useVisibilityTimeOnce(100);
  const className = isVisible ? "category-on" : "category-off";
  return (
  	<div className={className} ref={ref}>
  		<span className="category-text">{text}</span>
  		<span className="category-icon">{icon}</span>
  	</div>
  );
};

const Categories = () => (
	<div className="categories">
		<Category 
			text="Electronics" 
			icon={<GiSmartphone />}
		/>
		<Category 
			text="Clothes" 
			icon={<GiLoincloth />}
		/>
		<Category 
			text="Vehicles" 
			icon={<FaCar />}
		/>
		<Category 
			text="Apartments" 
			icon={<FaBuilding />}
		/>
		<Category 
			text="Houses" 
			icon={<GiHouse />}
		/>
		<Category 
			text="Islands" 
			icon={<GiIsland />}
		/>
	</div>
);

const CategoriesSection = () => (
	<Fragment>
		<Title />
		<Categories />
	</Fragment>
);

export default CategoriesSection;

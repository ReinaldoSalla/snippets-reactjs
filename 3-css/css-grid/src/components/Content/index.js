import React from "react";
import { FaCartPlus } from "react-icons/fa";
import data from "../../data/";
import "./index.css";

import { range } from "../../utils";

function Divs(props) {
	return range(props.numbers).map(number => 
		<div key={number} className="product-grid">
			content #{number+1}
		</div>
	);
}

export default function Content() {
	return (
		<div className="products-grid">
			<Divs numbers={12}/>
		</div>
	);
}
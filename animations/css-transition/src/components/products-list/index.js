import React from "react";
import Cars from "../cars/"

export default function ProductsList(props) {
	return (
		<div className="product-list">
			<h2>Product list:</h2>
			<Cars />
		</div>
	);
}
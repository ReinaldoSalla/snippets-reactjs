import React from "react";
import { ProductContext } from "../../context/ProductProvider";

export default function Cart() {
	const { cart } = React.useContext(ProductContext);
	return (
		<div>
			<h1>Products in cart</h1>
			<ul>
				{cart.map((product, index) => 
					<li key={index}>
						<p>{product.name} {product.price}</p>
					</li>
				)}
			</ul>
		</div>
	);
}
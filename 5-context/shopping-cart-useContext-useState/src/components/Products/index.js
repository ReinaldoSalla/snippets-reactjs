import React from "react";
import {
	Link,
	useRouteMatch
} from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function Products() {
	const { url } = useRouteMatch();
	const { products, addProductToCart } = React.useContext(ProductContext);
	return (
		<div>
			<h1>List of products</h1>
			<ul>
				{products.map((product, index) => 
					<li key={index}>
						<Link to={`${url}/${product.name.toLowerCase().replace(/ /g, "-")}`}>
							{product.name}
						</Link>
						&emsp;
						<span>{product.price}</span>
						&emsp;
						<button onClick={addProductToCart.bind(this, product)}>
							Add to cart
						</button>
					</li>
				)}
			</ul>
		</div>
	);
}
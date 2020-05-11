import React from "react";
import { ProductContext } from "../ProductContext/";
import { data } from "../../data/";

export default function ProductProvider(props) {
	const [products, setProducts] = React.useState(data.products)
	const [cart, setCart] = React.useState([]);

	return (
		<ProductContext.Provider 
			value={{
				products: products,
				cart: cart,
				addProductToCart: product => {
					setCart(cart => cart.concat(product))
				}
			}}>
			{props.children}
		</ProductContext.Provider>
	);
}


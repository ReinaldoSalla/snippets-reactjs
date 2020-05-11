import React from "react";
import { data } from "../../data/";
import { ProductReducer } from "../ProductReducer";

export const ProductContext = React.createContext();

export function ProductProvider(props) {
	const [state, dispatch] = React.useReducer(
		ProductReducer, 
		{ cart: [] }
	);
	return (
		<ProductContext.Provider
			value={{
				products: data.products,
				cart: state.cart,
				addProductToCart: product => {
					dispatch({
						type: "ADD_PRODUCT",
						payload: product
					});
				}
		}}>
			{props.children}
		</ProductContext.Provider>
	);
}


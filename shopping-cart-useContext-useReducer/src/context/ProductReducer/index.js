function addProductToCart(state, action) {
	const cart = [...state.cart];
	const product = action.payload;
	cart.push(product);
	return {...state, cart: cart};
}

export function ProductReducer(state, action) {
	switch (action.type) {
		case "ADD_PRODUCT":
			return addProductToCart(state, action);
		default:
			return state;
	}
}
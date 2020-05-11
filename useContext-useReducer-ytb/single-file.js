import React from "react";
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink
} from "react-router-dom";

function ConsoleLog(props) {
	if (Array.isArray(props.children)) {
		let text = "";
		props.children.forEach(child => text += child);
		console.log(text);
	} else {
		console.log(props.children);
	}
	return false;
}

const ADD_PRODUCT = "ADD_PRODUCT";

const ShopContext = React.createContext({
	products: [
		{
			id: 1,
			title: "Shaver bauman professional max",
			price: "R$10000"
		},
		{
			id: 2,
			title: "Notebook dell i9 rtx",
			price: "R$20000"
		},
		{
			id: 3,
			title: "Tv LG 4K 80'",
			price: "R$30000"
		}
	],
	cart: [],
	addProductToCart: product => {},
});

function addProductToCart(product, state) {
	const updatedCart = [...state.cart];
	const updatedItemIndex = updatedCart.findIndex(
		item => item.id === product.id
	);
	if (updatedItemIndex < 0) {
		updatedCart.push({ ...product, quantity: 1 });
	} else {
		const updatedItem = { ...updatedCart[updatedItemIndex] };
		updatedItem.quantity++;
		updatedCart[updatedItemIndex] = updatedItem;
	}
	return { ...state, cart: updatedCart };
}

function shopReducer(state, action) {
	switch (action.type) {
		case ADD_PRODUCT:
			return addProductToCart(action.product, state)
		default:
			return state;
	}
}

function GlobalState(props) {
	const products = [
		{
			id: 1,
			title: "Shaver bauman professional max",
			price: "R$10000"
		},
		{
			id: 2,
			title: "Notebook dell i9 rtx",
			price: "R$20000"
		},
		{
			id: 3,
			title: "Tv LG 4K 80'",
			price: "R$30000"
		}
	];
	const [cartState, dispatch] = React.useReducer(shopReducer, { cart: [] });

	const addProductToCart = product => {
		dispatch({ type: ADD_PRODUCT, product: product })
	};

	return (
		<ShopContext.Provider
			value={{
				products: products,
				cart: cartState.cart,
				addProductToCart: addProductToCart
			}}
		>
			{props.children}
		</ShopContext.Provider>
	);
}

function MainNavigation(props) {
	return (
		<header className="main-navigation">
			<nav>
				<ul>
					<li> <NavLink to="/">Products</NavLink> </li>
					<li> <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink> </li>
				</ul>
			</nav>
		</header>
	);
}

function ProductsPage(props) {
	return (
		<ShopContext.Consumer>
			{context => (
				<React.Fragment>
					<MainNavigation
						cartItemNumber={context.cart.reduce((count, curItem) => {
							return count + curItem.quantity;
						}, 0)}
					/>
					<main className="products">
						<ul>
							{context.products.map(product => (
								<li key={product.id}>
										<strong>{product.title}</strong> - {product.price}
										<button onClick={context.addProductToCart.bind(this, product)}>
											Add to cart
										</button>
								</li>
							))}
						</ul>
					</main>
				</React.Fragment>
			)}
		</ShopContext.Consumer>
	);
}

function CartPage(props) {
	const context = React.useContext(ShopContext);
	React.useEffect(() => {
		console.log(context)
	}, []);
	return (
		<React.Fragment>
			<MainNavigation
				cartItemNumber={context.cart.reduce((count, curItem) => {
					return count + curItem.quantity;
				}, 0)}
			/>
			<main className="cart">
				{context.cart.length <= 0 && <h1>todo noItem</h1>}
				<ul>
					{context.cart.map(cartItem => (
						<li key={cartItem.id}>
							{cartItem.title} - {cartItem.price} ({cartItem.quantity})
						</li>
					))}
				</ul>
			</main>
		</React.Fragment>
	);
}

export default function App() {
	return (
		<GlobalState>
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ProductsPage} exact/>
					<Route path="/cart" component={CartPage} exact />
				</Switch>
			</BrowserRouter>
		</GlobalState>
	);
}
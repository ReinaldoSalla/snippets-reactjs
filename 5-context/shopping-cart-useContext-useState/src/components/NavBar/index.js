import React from "react";
import {
	BrowserRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import Home from "../Home/";
import Products from "../Products/";
import Cart from "../Cart/";
import { ProductContext } from "../../context/ProductContext";

export default function NavBar() {
	const { cart } = React.useContext(ProductContext);
	return (
			<BrowserRouter>
				<ul>
					<li> <Link to="/">Home</Link> </li>
					<li> <Link to="/products">Products</Link> </li>
					<li> <Link to="/cart">Cart ({cart.length})</Link> </li>
					<Switch>
						<Route path="/" exact> <Home /> </Route>
						<Route path="/products"> <Products /> </Route>
						<Route path="/cart"> <Cart /> </Route>
					</Switch>
				</ul>
			</BrowserRouter>
	);
}
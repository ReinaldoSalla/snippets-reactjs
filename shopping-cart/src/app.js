import React from "react";
import {
	BrowserRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import Home from "./components/Home/";
import Products from "./components/Products/";
import Cart from "./components/Cart/";

export default function BaseLayout() {
	return (
		<BrowserRouter>
			<ul>
				<li> <Link to="/">Home</Link> </li>
				<li> <Link to="/products">Products</Link> </li>
				<li> <Link to="/cart">Cart</Link> </li>
				<Switch>
					<Route path="/" exact> <Home /> </Route>
					<Route path="/products"> <Products /> </Route>
					<Route path="/cart"> <Cart /> </Route>
				</Switch>
			</ul>
		</BrowserRouter>
	);
}
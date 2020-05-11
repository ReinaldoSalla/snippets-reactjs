import React from "react";
import {
	BrowserRouter,
	Link,
	Route,
	useParams
} from "react-router-dom";
import { Icon } from "react-materialize";

function Home() {
	return (
		<div>
			<h1>Content to be rendered in home page</h1>
		</div>
	);
}

const data = {
	title: "Products to buy",
	items: [
		{ id: 1, name: "Notebook dell i7 rtx", price: 10000},
		{ id: 2, name: "Tv lg 80' 4k oled", price: 10000},
		{ id: 3, name: "Shaver bouman professional", price: 10000}
	]
};

function Items() {
	const productItems = data.items.map(product => 
		<li key={product.id}> <Link to={`/products/${product.id}`}>{product.name}</Link>, costs ${product.price}</li>
	);
	return (
		<div>
			<ul> {productItems} </ul>
		</div>
	);
}

function Products() {
	return (
		<div>
			<Route path="/products" exact>
				<Items />
			</Route>
			<Route path="/products/:id" component={Product}/>
		</div>
	);
}

class Product extends React.Component {
	constructor(props) {
		super(props);
		this.state = { numBuys: 0 };
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({ numBuys: this.state.numBuys+1 });
	}

	render() {
		const product = data.items.find(prod => 
			prod.id === parseInt(this.props.match.params.id)
		);
		return (
			<div>
				<BrowserRouter>
					<Route path={`/products/${this.props.match.params.id}`} exact>
						<p>{product.name}</p>
						<Link to="/cart">
							<button onClick={this.onClick}>
								Buy
							</button>
						</Link>
					</Route>
					<Route path="/cart">
						<Cart myList={[product.name]} />
					</Route>
				</BrowserRouter>
			</div>
		);
	}
}

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		console.log("onConstructor");
	}

	componentDidMount() {
		this.setState(state => ({
			items: state.items.concat(this.props.productName)
		}));
	}

	render() {
		console.log(this.state.items);
		return (
			<div>
				<p>Current stata of Cart component: {this.state.items}</p>
			</div>
		);
	}
}

export default function BaseLayout() {
	return (
		<BrowserRouter>
			<Link to="/">Home</Link> <br />
			<Link to="/products">Products</Link> <br />
			<Link to="/cart">Cart</Link>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
			<Route path="/cart">
				<Cart myList={["first"]}/>
			</Route>
		</BrowserRouter>
	);
}
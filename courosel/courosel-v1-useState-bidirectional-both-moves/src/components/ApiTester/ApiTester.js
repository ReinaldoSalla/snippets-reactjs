import React, { 
	useEffect,
	useState,
	Fragment
} from "react";

const Loading = () => <h1>Loading</h1>;

const Product = ({ name, price }) => (
	<li> 
		{name}, {price} 
	</li>
)

const ListProducts = ({ products }) => (
	products.map((product, index) => 
		<Product 
			key={index} 
			name={product.name} 
			price={product.price}
		/>
	)
);

const Products = ({ products }) => {
	return (
		<ul> 
			<ListProducts products={products} /> 
		</ul>
	);
};

const Loader = ({ isLoading, products }) => (
	isLoading 
		? <Loading /> 
		: <Products products={products}/>
);

const ApiTester = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8080/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.products);
				setIsLoading(false);
			})
			.catch(err => console.error(err));
	}, []);

	return (
		<Fragment>
			<Loader isLoading={isLoading} products={products}/>
		</Fragment>
	)
};

export default ApiTester;


import React from "react";

const ApiTester = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [products, setProducts] = React.useState(null);

	React.useEffect(() => {
		fetch("http://localhost:8080/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.products);
				setIsLoading(false);
			})
			.catch(err => console.error(err));
	}, []);

	if (isLoading) {
		return <h1>Loading...</h1>
	}
	return (
		<ul>
			{products.map((product, index) => 
				<li>{product.name} - {product.price}</li>
			)}
		</ul>
	);
};

export default ApiTester;
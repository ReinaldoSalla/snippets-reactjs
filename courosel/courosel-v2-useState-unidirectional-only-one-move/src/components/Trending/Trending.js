import React, { 
	useEffect,
	useState
} from "react";
import Spinner from "../Spinner";
import "./Trending.css";
import useVisibilityTimeOnce from "../../utils/useVisibility";

const Title = ({ title }) => (
	<h1 className="trending-title">
		{title}
	</h1>
);

const LoaderTrending = () => (
	<div className="loader-trending">
    <Spinner />
  </div>
);

const Product = ({ name, price, img }) => {
  const [isVisible, ref] = useVisibilityTimeOnce(-100);
  const className = isVisible ? "product-on" : "product-off";
  return (
  	<div className={className} ref={ref}>
  		<div className="product-name">{name}</div>
  		<img className="product-img" src={img} alt={name}/>
      <div className="product-line"/>
  		<div className="product-price">
  			${price} 
      </div>
			<div className="product-average">
				(5% bellow average)
			</div>
  		<button className="product-button">Add to Pocket</button>
      <button className="product-button">Visit Link</button>
  	</div>
  );
};

const ListProducts = ({ products }) => (
	products.map((product, index) => 
		<Product 
			key={index} 
			name={product.name} 
			price={product.price}
			img={product.img}
		/>
	)
);

const Products = ({ products }) => (
	<div className="products"> 
		<ListProducts products={products} /> 
	</div>
);

const Loader = ({ isLoading, products }) => (
	isLoading 
		? <LoaderTrending /> 
		: <Products products={products}/>
);

const Trending = () => {
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
		<div className="trending">
			<Title title="Trending" />
			<Loader isLoading={isLoading} products={products}/>
		</div>
	);
};

export default Trending;


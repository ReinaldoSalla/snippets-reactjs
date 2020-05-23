import data from "../models/products-model";

const listProducts = (req, res) => {
	console.log("GET localhost:8080/products");
	res.json({
		title: "Products listing",
		products: data
	});
};

export default listProducts;
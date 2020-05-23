import listProducts from "../services/products-service";

const configureEndpoints = (app) => {
	app.route("/products").get(listProducts)
};

export default configureEndpoints;
import React from "react";
import { ProductProvider } from "./context/ProductProvider/";
import NavBar from "./components/NavBar/";

export default function BaseLayout() {
	return (
		<ProductProvider>
			<NavBar />
		</ProductProvider>
	);
}


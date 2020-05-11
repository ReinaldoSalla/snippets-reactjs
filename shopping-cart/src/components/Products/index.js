import React from "react";
import {
	Link,
	useRouteMatch
} from "react-router-dom";
import { data } from "../../data/";
import { toLowerCaseWithDash } from "../../utils/";

export default function Products() {
	const { url } = useRouteMatch();
	return (
		<div>
			<ul>
				{data.products.map((product, index) => 
					<li key={index}> 
						<Link to={`${url}/${toLowerCaseWithDash(product.name)}`}>
							link {product.name}
						</Link> 
					</li>
				)}
			</ul>
		</div>
	);
}


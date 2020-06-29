import React from "react";
import Car from "../car/";
import MyContext from "../../my-context";

export default function Cars(props) {
	return (
		<MyContext.Consumer>
			{context => (
				<div>
					<h4>Cars:</h4>
					{Object.keys(context.cars).map(carID => (
						<Car
							key={carID}
							name={context.cars[carID].name}
							price={context.cars[carID].price}
							incrementPrice={() => context.incrementPrice(carID)}
							decrementPrice={() => context.decrementPrice(carID)}
						/>
					))}
				</div>
			)}
		</MyContext.Consumer>
	);
}


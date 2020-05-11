import React, {
	useContext
} from "react";
import {MovieContext} from "../../movie-list-context";

export default function Movie(props) {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			<h3>{props.name}</h3>
			<p>{props.price}</p>
		</div>
	);
}


import React, {
	useContext
} from "react";
import { MovieContext } from "../../movie-list-context";

export default function Nav() {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			<h3>JavaScript React</h3>
			<p>List of movies: {movies.length}</p>
		</div>
	)
}
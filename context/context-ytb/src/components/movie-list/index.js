import React, {
	useState,
	useContext
} from "react";
import Movie from "../movie/";
import {MovieContext} from "../../movie-list-context";

export default function MovieList() {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			{movies.map((movie, index) => 
				<Movie name={movie.name} price={movie.price} key={index} />
			)}
		</div>
	);
}
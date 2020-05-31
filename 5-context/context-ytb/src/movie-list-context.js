import React, {
	useState,
	createContext
} from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {
	const [movies, setMovies] = useState([
		{
			name: "Minority Report",
			price: "$9.99",
			id: 1
		},
		{
			name: "Watchmen",
			price: "$19.99",
			id: 2
		},
		{
			name: "Troy",
			price: "$29.99",
			id: 3
		}
	]);
	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	);
}
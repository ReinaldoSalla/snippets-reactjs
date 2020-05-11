import React, {
	useState,
	useContext,
	useEffect,
	useReducer,
	createContext
} from "react";
import MovieList from "./components/movie-list/";
import Nav from "./components/nav/";
import { MovieProvider } from "./movie-list-context";
import AddMovie from "./components/add-movie";

export default function Form() {
	return (
		<MovieProvider>
			<div className="app">
				<Nav />
				<hr />
				<AddMovie />
				<hr />
				<MovieList />
			</div>
		</MovieProvider>
	)	
}

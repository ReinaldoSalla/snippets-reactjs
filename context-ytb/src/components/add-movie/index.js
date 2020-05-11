import React, {
	useState,
	useContext
} from "react";
import { MovieContext } from "../../movie-list-context";

export default function AddMovie() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div>
			<form onSubmit={(event) => {
				event.preventDefault();
				setMovies(prevMovies => [
					...prevMovies, 
					{name: name, price: price}
				]);
			}}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(event) => {
						setName(event.target.value);
					}}/>
				<input
					type="text"
					name="price"
					value={price}
					onChange={event => {
						setPrice(event.target.value);
					}}/>
				<button>Add movie</button>
			</form>
		</div>
	);
}
import React from "react";
import {
	BrowserRouter,
	Switch,
	Route,
	Link 
} from "react-router-dom";

export default function BasicExample() {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact>
					<ul>
					{/* Link to === a href, it just set the url when the link is clicked*/}
						<li> <Link to="/">Home Page</Link> </li>
						<li> <Link to="/series">Series Page</Link> </li>
						<li> <Link to="/videogames">Videogames Page</Link> </li>
					</ul>
				</Route>
				{/*Switch looks to its child Routes and render the first one the matcher path*/}
				<Switch>
				  <Route exact path="/" component={Home} />
				  <Route path="/series" component={Series} />
				  <Route path="/videogames" component={Videogames} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}


function Home() {
	return <h1> Website's home page</h1>;
}

function Series() {
	const series = ["Peaky blinders", "Black Sails", "Rome", "Game of thrones", "Westworld"];
	const listSeries = series.map((serie, index) => 
		<li key={index}>Television show nº {index+1}: {serie}</li>
	);
	return <ul>{listSeries}</ul>
}

function Videogames() {
	return <h1>Video games would ho here</h1>
}
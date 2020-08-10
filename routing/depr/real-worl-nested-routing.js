// Why do i need a Switch
// What is the difference between url and link from useRouteMatch
/*
import React from "react";
import {
	BrowserRouter,
	Link,
	Switch,
	Route,
	useRouteMatch
} from "react-router-dom";
import "../styles/learn-react.css";


function Home() {
	return <h1> chose one of JavaScript, NodeJS or ReactJS </h1>;
}

function AsyncAwait() {	
	const items = ["async await mdn", "async await fireship", "async await techsith"];
	const listItems = items.map((item, index) => 
		<li key={index}>{item}</li>
	);
	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
}

function Closure() {
	const items = ["closures mdn", "closures fireship", "closures techsit"];
	const listItems = items.map((item, index) => 
		<li key={index}>{item}</li>
	);
	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
}

function CallBindApply() {
	const items = ["call bind apply mdn", "call bind apply fireship", "call bind applt techsit"];
	const listItems = items.map((item, index) => 
		<li key={index}>{item}</li>
	);
	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	);
}

function UnorderedList(props) {
	const listItems = props.items.map((item, index) => 
		<li key={index}>{item}</li>
	);
	return <ul>{listItems}</ul>;
}

function Decorators(props) {
	const items = [
		"decorators mdn",
		"decorators typescript official docs",
		"decorators fireship",
		"decorators techsit"
	];
	return (
		<div>
			<UnorderedList items={items} />
		</div>
	);
}

function JavaScript() {
	const items = ["Async Await", "Closures", "Call Bind Apply"];
	const listItems = items.map((item, index) => 
		<li key={index}>{item}</li>
	);
	const { path, url } = useRouteMatch();
	console.log("{ path, url } = useRouteMatch()");
	console.log(`{ ${path}, ${url} } = useRouteMatch()`);
	return (
		<div>
			<ul>{listItems}</ul>
			<Route path={`${path}`} exact >
				<p> Click <Link to={`${url}/async-await`}>here</Link> to access Async Await </p>
				<p> Click <Link to={`${url}/closure`}>here</Link> to access Closure </p>
				<p> Click <Link to={`${url}/call-bind-apply`}>here</Link> to access Call Bind Apply </p>
				<p> Click <Link to={`${url}/decorators`}>here</Link> to access Decorators </p>
			</Route>
			<Switch>
				<Route path={`${path}/async-await`} component={AsyncAwait} />
				<Route path={`${path}/closure`} component={Closure} />
				<Route path={`${path}/call-bind-apply`} component={CallBindApply} />
				<Route path={`${path}/decorators`} component={Decorators} />
			</Switch>
		</div>
	);
}

function NodeJS() {
	return <h1>TODO nodejs</h1>;
}

function ReactJS() {
	return <h1>TODO reactjs</h1>;
}

export default function Organizer() {
	return (
		<BrowserRouter>
			<ul>
				<li> <Link to="/">Home </Link> </li>
				<li> <Link to="/javascript">JavaScript </Link> </li>
				<li> <Link to="/nodejs">NodeJS </Link> </li>
				<li> <Link to="/reactjs">ReactJS </Link> </li>
			</ul>
			<Switch>
				<Route path="/" component={Home} exact/>
				<Route path="/javascript" component={JavaScript} />
				<Route path="/nodejs" component={NodeJS} />
				<Route path="/reactjs" component={ReactJS} />
			</Switch>
		</BrowserRouter>
	);
}
*/

import React from "react";
import {
	BrowserRouter,
	Route,
	Link
} from "react-router-dom";
import "../styles/learn-react.css";

const items = {
	javascript: [
		"async-await",
		"decorators",
		"closures"
	],
	nodejs: [
		"NestJS - guards, pipes, filters",
		"NestJS - authentication",
		"NestJS - Microservices"
	],
	reactjs: [
		"react-router",
		"ecommerce-react",
		"redux",
		"ecommerce-redux",
		"create ecommerce templates for upwork",
		"react-typescript",
		"react-testing",
		"react-context",
		"react-hooks"
	]
};

function Home() {
	return <h1>Select JavaScript, NodeJS or ReactJS</h1>;
}

function AsyncAwait() {
	return <h1>Async Await content</h1>;
}

function Decorators() {
	return <h1>Decorators content</h1>;
}

function Closures() {
	return <h1>Closures content</h1>;
}

function JavaScript() {
	const links = items.javascript.map((item, index) => 
		<li key={index}> Click <Link to={`/javascript/${item}`}>here</Link> to acess {item} </li>
	);
	return (
		<div className="javascript-page">
			<Route path="/javascript" exact>
				<ul>{links}</ul>
			</Route>
			<Route path="/javascript/async-await">
				<AsyncAwait />
			</Route>
			<Route path="/javascript/decorators">
				<Decorators />
			</Route>
			<Route path="/javascript/closures">
				<Closures />
			</Route>
		</div>
	);
}

function NodeJS() {
	return <h1>Node</h1>;
}

function ReactJS() {
	return <h1>React</h1>;
}

export default function Organizer() {
	return (
		<BrowserRouter>
			<div className="main-page">
				<ul>
					<li> <Link to="/">Home</Link> </li>
					<li> <Link to={`/javascript`}>JavaScript</Link> </li>
					<li> <Link to="/nodejs">NodeJS</Link> </li>
					<li> <Link to="/reactjs">ReactJS</Link> </li>
				</ul>
				<Route path="/" exact> <Home /> </Route>
				<Route path="/javascript"> <JavaScript /> </Route>
				<Route path="/nodejs"> <NodeJS /> </Route>
				<Route path="/reactjs"> <ReactJS /> </Route>
			</div>
		</BrowserRouter>
	);
}
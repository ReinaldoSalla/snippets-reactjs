import React from "react";
import {
	BrowserRouter,
	Link,
	Switch,
	Route,
	useRouteMatch,
	useLocation
} from "react-router-dom";


function NoMatch() {
	const location  = useLocation();
	return (
		<Route path="*">
			<div>
				<h1>Could not find {location.pathname}</h1>
			</div>
		</Route>
	);
}

function Home() {
	return (
		<div>
			<h1> choose either javascript, react or node </h1>
		</div>
	);
}

const data = {
	title: "Contents for JavaScript, React and Node",
	javascript: [
		"closures", 
		"call-bind-apply", 
		"this-current-execution-context"
	],
	reactjs: [
		"router", 
		"hooks", 
		"context", 
		"html-mdn-react", 
		"css-mdn-react"
	],
	nodejs: [
		"passportjs-local",
		"passportjs-oauth",
		"mongodb"
	]
};

function Contents(props) {
	const listItems = data[props.content].map((item, index) => 
		<li key={index}>  <Link to={`/${props.content}/${item}`}>{item} </Link> </li>
	);
	return <ul>{listItems}</ul>
}

function Closures(props) {
	const { url, path } = useRouteMatch();
	const location = useLocation();
	console.log(`url=${url}, path=${path}, location.pathname=${location.pathname}`);
	return (
		<div>
			<h1>todo Closures</h1>
		</div>
	);
}

function CallBindApply(props) {
	return (
		<div>
			<h1>todo CallBindApply</h1>
		</div>
	);
}

function ThisCurrentExecutionContext(props) {
	return (
		<div>
			<h1>todo ThisCurrentExecutionContext</h1>
		</div>
	);
}

function JavaScript() {
	const { path } = useRouteMatch();
	return (
		<div>
			<Route path={path} exact>
				<h1>JavaScript content</h1>
				<Contents content="javascript" />
			</Route>
			<Switch>
				<Route path={`${path}/closures`}> <Closures /> </Route>
				<Route path={`${path}/call-bind-apply`}> <CallBindApply /> </Route>
				<Route path={`${path}/this-current-execution-context`}> <ThisCurrentExecutionContext /> </Route>
			</Switch>
		</div>
	);
}

function ReactJS() {
	return (
		<div>
			<h1>todo reactjs</h1>
		</div>
	);
}

function NodeJS() {
	return (
		<div>
			<h1>todo nodejs</h1>
		</div>
	);
}

export default function BaseLayout() {
	return (
		<BrowserRouter>
			<ul>
				<li> <Link to="/">Home</Link> </li>
				<li> <Link to="/javascript">JavaScript</Link> </li>
				<li> <Link to="/reactjs">ReactJS</Link> </li>
				<li> <Link to="/nodejs">NodeJS</Link> </li>
			</ul>
			<Switch>
				<Route path="/" exact> <Home /> </Route>
				<Route path="/javascript"> <JavaScript /> </Route>
				<Route path="/reactjs"> <ReactJS /> </Route>
				<Route path="/nodejs"> <NodeJS /> </Route>
				<NoMatch />
			</Switch>
		</BrowserRouter>
	);
}
/*
import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarProvider";
import Courosel from "./components/Courosel";
import Content from "./components/Content";

import "./App.css"

function Todo(props) {
	return <span>todo {props.name}</span>
}

function App() {
  return (
  	<SidebarProvider>
	    <div className="app-grid">
	    	<div className="topbar">
	    		<Topbar />
	    	</div>
	    	<div className="sidebar">
	    		<Sidebar />
	    	</div>
	    	<div className="courosel">
	    		<Courosel />
	    	</div>
	    	<div className="content">	
	    		<Content />
	    	</div>
	    	<div className="footer">
	    		<Todo name="Footer" />
	    	</div>
	    </div>
	  </SidebarProvider>
  );
}
*/

import React from "react";

const useWindowSize = () => {
	const getSize = () => ({
		width: window.innerWidth,
		height: window.innerHeight
	});

	const [size, setSize] = React.useState(getSize);
	const [debouce, setDebouce] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setDebouce(debouce + 1);
		}, 1000);
		return clearInterval(intervalId);
	}, [debouce]);

	React.useEffect(() => {
		window.addEventListener("resize", () => {
			setSize(getSize());
		});
		return () => {
			window.removeEventListener("resize", () => {
				setSize(getSize());
			});
		};
	}, [debouce]);

	return size;
};

const App = () => {
	const size = useWindowSize();

	return (
		<h1>{size.width}x{size.height}</h1>
	);
};

export default App;


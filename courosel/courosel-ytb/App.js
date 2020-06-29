import React from "react";
import Topbar from "./components/Topbar/";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarProvider/";
import Courosel from "./components/Courosel";
import "./App.css"

function Todo(props) {
	return <span>todo {props.name}</span>
}

export default function App() {
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
	    		<Todo name="Content" />
	    	</div>
	    	<div className="ads">
	    		<Todo name="Ads" />
	    	</div>
	    	<div className="footer">
	    		<Todo name="Footer" />
	    	</div>
	    </div>
	  </SidebarProvider>
  );
}
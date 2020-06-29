import React from "react";
import Topbar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./context/SidebarProvider";
import Courosel from "./components/Courosel";
import Content from "./components/Content";
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
	    		<Content />
	    	</div>
	    	<div className="footer">
	    		<Todo name="Footer" />
	    	</div>
	    </div>
	  </SidebarProvider>
  );
}
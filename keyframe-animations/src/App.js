import React from "react";
import TopBar from "./components/Topbar/";
import "./App.css"

import { IconContext } from "react-icons";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs"


function Courosel() {
	return (
		<div>
			<p>todo Courosel</p>
		</div>
	);
}

function Content() {
	return (
		<div>
			<p>todo Content</p>
		</div>
	);
}

function Ads() {
	return (
		<div>
			<p>todo Ads</p>
		</div>
	);
}

function Footer() {
	return (
		<div>
			<p>todo Footer</p>
		</div>
	);
}

function BasicAnimations() {
	return (
		<div className="animation-container">
			<p id="fade-animation">Fading animation</p>
			<p id="rotate-animation">Rotate animation</p>
			<p id="slidein-animation">Slidein animation</p>
		</div>
	);
}

export default function App() {
  return (
  	<React.Fragment>
	    <div className="container">
	      <div className="topbar"> <TopBar /> </div>
	      <div className="courosel"> <Courosel /> </div>
	      <div className="content"> <Content /> </div>
	      <div className="ads"> <Ads /> </div>
	      <div className="footer"> <Footer /> </div>
	    </div>
	  </React.Fragment>
  );
}
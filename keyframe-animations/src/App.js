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
		<div classNameName="animation-container">
			<p id="fade-animation">Fading animation</p>
			<p id="rotate-animation">Rotate animation</p>
			<p id="slidein-animation">Slidein animation</p>
		</div>
	);
}

/*
export default function App() {
  return (
  	<React.Fragment>
	    <div classNameName="container">
	      <div classNameName="topbar"> <TopBar /> </div>
	      <div classNameName="courosel"> <Courosel /> </div>
	      <div classNameName="content"> <Content /> </div>
	      <div classNameName="ads"> <Ads /> </div>
	      <div classNameName="footer"> <Footer /> </div>
	    </div>
	  </React.Fragment>
  );
}
*/

export default function App() {
	const wrapperRef = React.createRef();
	return (
		<div ref={wrapperRef} className="wrapper">
			<div className="nav">
				<BsReverseLayoutTextSidebarReverse 
					className="nav-icon"
					onClick={() => {
						wrapperRef.current.classList.toggle("is-nav-open");
					}}
				/>
				<div className="nav-body">
					sidebar content
				</div>
			</div>
		</div>
	);
}
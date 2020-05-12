import React from "react";
import "./index.css";

const slides = [
	{
		imgUrl: "https://preview.ibb.co/j8nRCQ/fashion2.jpg",
		className: "first-img"
	},
	{
		imgUrl: "https://preview.ibb.co/fm4Cmk/fashion3.jpg",
		className: "second-img"
	},
	{
		imgUrl: "https://preview.ibb.co/bMsCK5/fashion5.jpg",
		className: "third-img"
	}
];

/*
export default function Courosel() {
	const [time, setTime] = React.useState(0);
	const index = time % slides.length;

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(time + 1);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [time]);

	return (
		<img 
			className={slides[index].className} 
			src={slides[index].imgUrl}
		/>
	);
}
*/

export default function App() {
	return (
		<div className="slidershow middle">
			<div className="slides">
				<input type="radio" name="r" id="r1"/>
				<input type="radio" name="r" id="r2"/>
				<input type="radio" name="r" id="r3"/>
				<input type="radio" name="r" id="r4"/>
				<input type="radio" name="r" id="r5"/>
				<div className="slide s1">	
					<img src={slides[0].imgUrl}/>
				</div>
				<div className="slide">
					<img src={slides[1].imgUrl}/>
				</div>
				<div className="slide">
					<img src={slides[2].imgUrl}/>
				</div>
				<div className="slide">
					<img src={slides[0].imgUrl}/>
				</div>
				<div className="slide">
					<img src={slides[1].imgUrl}/>
				</div>
				<div className="navigation">
					<label for="r1" className="bar"></label>
					<label for="r2" className="bar"></label>
					<label for="r3" className="bar"></label>
					<label for="r4" className="bar"></label>
					<label for="r5" className="bar"></label>
				</div>
			</div>
		</div>
	);
}
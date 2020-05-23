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
	},
	{
		imgUrl: "https://image.ibb.co/kOhL6k/img1.jpg",
		className: "forth-img"
	},
	{
		imgUrl: "https://image.ibb.co/nNmKz5/img2.jpg",
		className: "fifth-img"
	}
];

const duration = 100000;

function reducer(state, action) {
	switch (action.type) {
		case "setDirectionToRight":
			return { ...state, direction: "right" };
		case "setDirectionToLeft":
			return { ...state, direction: "left" };
		case "moveToFirstIndex":
			return { ...state, index: 0, duration: duration * 2 };
		case "moveToSecondIndex":
			return { ...state, index: 1, duration: duration * 2 };
		case "moveToThirdIndex":
			return { ...state, index: 2, duration: duration * 2 };
		case "moveToForthIndex":
			return { ...state, index: 3, duration: duration * 2 };
		case "moveToFifthIndex":
			return { ...state, index: 4, duration: duration * 2 };
		case "incrementIndex":
			return { ...state, index: state.index + 1, duration: duration };
		case "decrementIndex":
			return { ...state, index: state.index - 1, duration: duration };
		case "highlightFirstLabel":
			return { ...state, labels: ["on", "off", "off", "off", "off" ]};
		case "highlightSecondLabel":
			return { ...state, labels: ["off", "on", "off", "off", "off" ]};
		case "highlightThirdLabel":
			return { ...state, labels: ["off", "off", "on", "off", "off" ]};
		case "highlightForthLabel":
			return { ...state, labels: ["off", "off", "off", "on", "off" ]};
		case "highlightFifthLabel":
			return { ...state, labels: ["off", "off", "off", "off", "on" ]};
		default:
			throw new ReferenceError(`Action '${action.type} is not defined'`);
	}
}

export default function Courosel() {
	const [state, dispatch] = React.useReducer(reducer, {
		index: 0,
		directoin: "right",
		labels: ["on", "off", "off", "off", "off"],
		duration: duration
	});

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			switch (state.direction) {
				case "right":
					dispatch({ type: "incrementIndex" });
					break;
				case "left":
					dispatch({ type: "decrementIndex" });
					break;
				default:
					throw new ReferenceError(`Direction ${state.direction} is not defined`);
			}
		}, state.duration);
		return () => clearInterval(intervalId);
	}, [state.direction, state.duration]);

	React.useEffect(() => {
		switch (state.index) {
			case 0:
				dispatch({ type: "setDirectionToRight" });
				break;
			case 1: 
				break;
			case 2: 
				break;
			case 3:
				break;
			case 4:
				dispatch({ type: "setDirectionToLeft" });
				break
			default:
				throw new ReferenceError(`Index ${state.index} is not defined`);
		}
	}, [state.index]);

	React.useEffect(() => {
		switch (state.index) {
			case 0:
				dispatch({ type: "highlightFirstLabel" });
				break;
			case 1:
				dispatch({ type: "highlightSecondLabel" });
				break;
			case 2:
				dispatch({ type: "highlightThirdLabel" });
				break;
			case 3:
				dispatch({ type: "highlightForthLabel" });
				break;
			case 4:
				dispatch({ type: "highlightFifthLabel" });
				break;
			default:
				throw new ReferenceError(`Index ${state.index} is not defined`);
		}
	}, [state.index]);

	return (
		<div className="courosel">
			<div className={slides[state.index].className}>
				<div className="imgs">
					<div className="reference-img">
						<img
							id="courosel-img"
							src={slides[0].imgUrl} 
							alt=""
						/>
					</div>
					<div className="displaced-img">
						<img 
							id="courosel-img"
							src={slides[1].imgUrl} 
							alt=""
						/>
					</div>
					<div className="displaced-img">
						<img 
							id="courosel-img"
							src={slides[2].imgUrl} 
							alt=""
						/>
					</div>
					<div className="displaced-img">
						<img 
							id="courosel-img"
							src={slides[3].imgUrl} 
							alt=""
						/>
					</div>
					<div className="displaced-img">
						<img
							id="courosel-img"
							src={slides[4].imgUrl} 
							alt=""
						/>
					</div>
					<div className="courosel-labels">
						<label 
							htmlFor="first-input" 
							className="courosel-label first-label"
							id={`first-label-${state.labels[0]}`}
						>
						</label>
						<label 
							htmlFor="second-input" 
							className="courosel-label"
							id={`second-label-${state.labels[1]}`}
						>
						</label>
						<label 
							htmlFor="third-input" 
							className="courosel-label"
							id={`third-label-${state.labels[2]}`}
						>
						</label>
						<label 
							htmlFor="forth-input" 
							className="courosel-label"
							id={`forth-label-${state.labels[3]}`}
						>
						</label>
						<label 
							htmlFor="fifth-input" 
							className="courosel-label"
							id={`fifth-label-${state.labels[4]}`}
						>
						</label>
					</div>
					<input 
						type="radio" 
						id="first-input" 
						onClick={() => dispatch({ type: "moveToFirstIndex" })}
					/>
					<input 
						type="radio" 
						id="second-input" 
						onClick={() => dispatch({ type: "moveToSecondIndex" })}
					/>
					<input 
						type="radio" 
						id="third-input" 
						onClick={() => dispatch({ type: "moveToThirdIndex" })}
					/>
					<input 
						type="radio" 
						id="forth-input" 
						onClick={() => dispatch({ type: "moveToForthIndex" })}
					/>
					<input 
						type="radio" 
						id="fifth-input" 
						onClick={() => dispatch({ type: "moveToFifthIndex" })}
					/>
				</div>
			</div>
		</div>
	);
}
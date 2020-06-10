import React, {
	createRef,
	useEffect,
	useState
} from "react";
import throttle from "lodash.throttle";
import "./App.css";

let nCalls = 0;
let useVisibilityNumCalls = 0;

const useVisibility = (throttleMiliseconds=100) => {
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = createRef(null);

	useVisibilityNumCalls++;
	console.log(`useVisibilityNumCalls = ${useVisibilityNumCalls}`);

	// onScroll is executed only once every 100 ms.
	const onScroll = throttle(() => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		}
		const top = currentElement.current.getBoundingClientRect().top;
		setIsVisible(
			top >= 0 && 
			top <= window.innerHeight
		);
	}, throttleMiliseconds);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	});

	return [isVisible, currentElement];
};

/*
const useVisibility = () => {
	const [debounce, setDebounce] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = createRef(null);

	useVisibilityNumCalls++;
	console.log(`useViibilityNumCalls = ${useVisibilityNumCalls}`);
	console.log(`debounce = ${debounce}`);

	const onScroll = () => {
		if (!currentElement.current) {
			setIsVisible(false);
			return
		}
		const top = currentElement.current.getBoundingClientRect().top;
		setIsVisible(top >= 0 && top <= window.innerHeight);
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDebounce(debounce + 1);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [debounce]);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [debounce]);

	return [isVisible, currentElement];
};
*/

const App = () => {
	const [isFirstVisible, firstRef] = useVisibility();
	const [isSecondVisible, secondRef] = useVisibility();

	useEffect(() => {
		document.title = `${isFirstVisible} - ${isSecondVisible}`
	}, [isFirstVisible, isSecondVisible]);

	nCalls++;
	console.log(`call nº ${nCalls}`)
	console.log(`isFirstVisisble = ${isFirstVisible}`);
	console.log(`isSecondVisible = ${isSecondVisible}`);

	return (
		<div className="app">
			<div ref={firstRef} className="first-element">
				Event isFirstVisible
			</div>
			<div ref={secondRef} className="second-element">
				Event isSecondVisible
			</div>
		</div>
	);
};

export default App;
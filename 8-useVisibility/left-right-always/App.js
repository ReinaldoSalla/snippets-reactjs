
import React, {
	createRef,
	useEffect,
	useState
} from "react";
import "./App.css";
import throttle from "lodash.throttle";

const offset = 100;

const useVisibility = () => {
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = createRef(null);

	const checkIsVisible = top => 
		top + offset >= 0 && top + offset <= window.innerHeight;

	const onScroll = throttle(() => {
		if (!currentElement.current) {
			setIsVisible(false);
			return;
		} else {
			setIsVisible(checkIsVisible(
				currentElement.current.getBoundingClientRect().top
			));
		}
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	});

	return [isVisible, currentElement];
}; 

const App = () => {
	const [isFirstVisible, firstRef] = useVisibility();
	const [isSecondVisible, secondRef] = useVisibility();
	const firstClassName = isFirstVisible 
		? "first-element-on"
		: "first-element-off";
	const secondClassName = isSecondVisible 
		? "second-element-on"
		: "second-element-off";

	useEffect(() => {
		document.title = `${isFirstVisible} - ${isSecondVisible}`
	}, [isFirstVisible, isSecondVisible]);

	return (
		<div className="app">
			<div ref={firstRef} className={firstClassName}>
				Event isFirstVisible
			</div>
			<div className="second-overflow">
				<div ref={secondRef} className={secondClassName}>
					Event isSecondVisible
				</div>
			</div>
		</div>
	);
};

export default App;
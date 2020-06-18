import React, {
	createRef,
	useEffect,
	useState
} from "react";
import "./App.css";

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

const useVisibility = offset => {
	const [isVisible, setIsVisible] = useState(false);
	const currentElement = createRef(null);

	const checkIsVisible = top => 
		top + offset >= 0 && top + offset <= window.innerHeight;

	const onScroll = throttle(() => {
		setIsVisible(checkIsVisible(
			currentElement.current?.getBoundingClientRect().top
		));
	}, 100);

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	});

	return [isVisible, currentElement];
}; 

const App = () => {
	const [isFirstVisible, firstRef] = useVisibility(100);
	const [isSecondVisible, secondRef] = useVisibility(100);
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
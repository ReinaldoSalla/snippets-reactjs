import React, {
	createRef,
	useEffect,
	useState,
  useCallback
} from "react";
import "./App.css";

const useVisibilityTimeAlways = offset => {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef(null);

  const checkIsVisible = useCallback(top => (
    top + offset >= 0 && top + offset <= window.innerHeight
  ), [offset]);

	useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(checkIsVisible(
        currentElement.current?.getBoundingClientRect().top
      ));
    }, 100);
    return () => clearInterval(intervalId);
  }, [checkIsVisible, currentElement]);

  return [isVisible, currentElement];
};

const App = () => {
	const [isFirstVisible, firstRef] = useVisibilityTimeAlways(100);
	const [isSecondVisible, secondRef] = useVisibilityTimeAlways(100);
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
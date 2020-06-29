import React, {
	createRef,
	useEffect,
	useState,
  useCallback
} from "react";
import "./App.css";

const useVisibilityTimerOnce = (offset) => {
  const [isVisible, setIsVisible] = useState(false);
  const [wasAlreadyVisible, setWasAlreadyVisible] = useState(false);
  const currentElement = createRef(null);

  const checkIsVisible = useCallback(top => (
    top + offset >= 0 && top + offset <= window.innerHeight
  ), [offset]);

	useEffect(() => {
    if (!wasAlreadyVisible) {
      const intervalId = setInterval(() => {
        setIsVisible(checkIsVisible(
          currentElement.current?.getBoundingClientRect().top
        ));
      }, 100);
      if (isVisible) setWasAlreadyVisible(true);
      return () => clearInterval(intervalId);
    }
  }, [checkIsVisible, currentElement, isVisible, wasAlreadyVisible]);

  return [isVisible, currentElement];
};

const App = () => {
	const [isFirstVisible, firstRef] = useVisibilityTimerOnce(100);
	const [isSecondVisible, secondRef] = useVisibilityTimerOnce(100);
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
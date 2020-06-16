
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

const useVisibilityOnce = offset => {
  const [wasAlreadyVisible, setWasAlreadyVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef(null);

  const checkIsVisible = top =>
    top + offset >= 0 && top + offset <= window.innerHeight;

  const onScroll = throttle(() => {
    setIsVisible(checkIsVisible(
      currentElement.current?.getBoundingClientRect().top
    ));
    if (isVisible) setWasAlreadyVisible(true);
  }, 100);

  useEffect(() => {
    if (!wasAlreadyVisible) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } 
  });

  return [isVisible, currentElement];
};

const App = () => {
	const [isFirstVisible, firstRef] = useVisibilityOnce(100);
	const [isSecondVisible, secondRef] = useVisibilityOnce(100);
  const [isThirdVisible, thirdRef] = useVisibilityOnce(-300);
	const firstClassName = isFirstVisible 
		? "first-element-on"
		: "first-element-off";
	const secondClassName = isSecondVisible 
		? "second-element-on"
		: "second-element-off";
  const thirdClassName = isThirdVisible
    ? "third-element-on"
    : "third-element-off";

  console.log(thirdClassName);

	useEffect(() => {
		document.title = `${isFirstVisible} - ${isSecondVisible} - ${isThirdVisible}`
	}, [isFirstVisible, isSecondVisible, isThirdVisible]);

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
      <div ref={thirdRef} className={thirdClassName}>
        Event isThirdVisible
      </div>
		</div>
	);
};


export default App;

/*
import React, { Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
//import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
	return (
		<Fragment>
			<Topbar />
			<Courosel />
			<Trending />
			<Categories />
      <Footer />
		</Fragment>
	);
};

export default App;
*/

// useVisibilityTimeOnceDown


import React, {
  useState,
  useEffect,
  useCallback,
  createRef
 } from "react";
import "./App.css";

let nCalls = 0;

const useVisibilityTimeOnce = offset => {
  const [isVisible, setIsVisible] = useState(false);                   
  const [wasAlreadyVisible, setWasAlreadyVisible] = useState(false);
  const currentElement = createRef(null);

  const checkIsVisible = useCallback(top => (
    top + offset >= 0 && top + offset <= window.innerHeight
  ), [offset]);

  useEffect(() => {
    nCalls++;
    document.title = `Call n°${nCalls}`;
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

  return [isVisible, currentElement]
};

const Item = ({ text }) => {
  const [isVisible, ref] = useVisibilityTimeOnce(-100);
  const className = isVisible ? "item-on" : "item-off";
  return (
    <div className={className} ref={ref}>
      {text}
    </div>
  );
};

const data = new Array(12).fill(0).map((_, index) => ({                
  text: `Content ${index + 1}`
}));

const Items = () => {
  const listItems = data.map((item, index) => 
    <Item key={index} text={item.text}/>
  );
  return (
    <div className="items">
      {listItems}
    </div>
  );
};

const App = () => {
  return (
    <Items />
  );
};

export default App;
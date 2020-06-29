/*
import React, { useState, Fragment } from "react";
import Topbar from "./components/Topbar";
import Courosel from "./components/Courosel";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const containerOpacityClassName = isSidebarVisible
    ? "container-opacity-on"
    : "container-opacity-off";
  const sidebarIconClassName = isSidebarVisible
    ? "sidebar-icon-on"
    : "sidebar-icon-off";
  const sidebarContentClassName = isSidebarVisible
    ? "sidebar-content-on"
    : "sidebar-content-off";
  
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

	return (
		<Fragment>
			<Topbar 
        sidebarIconClassName={sidebarIconClassName}
        sidebarContentClassName={sidebarContentClassName}
        toggleSidebar={toggleSidebar}
      />
      <div className={containerOpacityClassName}>
  			<Courosel />
  			<Trending />
  			<Categories />
        <Footer />
      </div>
		</Fragment>                                                        
	);
};

export default App;     
*/

import React, { 
  Fragment,
  useReducer,
  useEffect
} from "react";
import js1 from "./assets/js1.png"
import js2 from "./assets/js2.jpg";
import js3 from "./assets/js3.png";
import js4 from "./assets/js4.jpg";
import js5 from "./assets/js5.jpg";
import "./App.css";

const duration = 4000;

const slides = [js1, js2, js3, js4, js5];

const reference = {
  firstImgClassName: "first-img-off",
  secondImgClassName: "second-img-off",
  thirdImgClassName: "third-img-off",
  forthImgClassName: "forth-img-off",
  fifthImgClassName: "fifth-img-off",
  firstInputClassName: "first-input-off",
  secondInputClassName: "second-input-off",
  thirdInputClassName: "third-input-off",
  forthInputClassName: 'forth-input-off',
  fifthInputClassName: 'fifth-input-off'
};

const initialState = {
  ...reference,
  firstImgClassName: "first-img-off",
  firstInputClassName: 'first-input-off',
  index: 0
};

const incrementIndex = (state) => {
  let newIndex = state.index + 1;
  if (newIndex === 5) newIndex = 0;
  return {
    ...state,
    index: newIndex
  };
};

const moveToFirstIndex = (state) => ({
  ...state,
  ...reference,
  firstImgClassName: "first-img-on",
  firstInputClassName: "first-input-on"
});

const moveToSecondIndex = (state) => ({
  ...state,
  ...reference,
  secondImgClassName: "second-img-on",
  secondInputClassName: "second-input-on"
});

const moveToThirdIndex = (state) => ({
  ...state,
  ...reference,
  thirdImgClassName: "third-img-on",
  thirdInputClassName: "third-input-on"
});

const moveToForthIndex = (state) => ({
  ...state,
  ...reference,
  forthImgClassName: "forth-img-on",
  forthInputClassName: 'forth-input-on'
});

const moveToFifthIndex = (state) => ({
  ...state,
  ...reference,
  fifthImgClassName: "fifth-img-on",
  fifthInputClassName: 'first-input-on'
});

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_INDEX":
      return incrementIndex(state);
    case "MOVE_TO_FIRST_INDEX":
      return moveToFirstIndex(state);
    case "MOVE_TO_SECOND_INDEX":
      return moveToSecondIndex(state);
    case "MOVE_TO_THIRD_INDEX":
      return moveToThirdIndex(state);
    case "MOVE_TO_FORTH_INDEX":
      return moveToForthIndex(state);
    case "MOVE_TO_FIFTH_INDEX":
      return moveToFifthIndex(state);
    default:
      throw new ReferenceError(`Action type ${action.type} is not declared`);
  }
};

const Courosel = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "INCREMENT_INDEX" });
    }, duration);
    return () => clearInterval(intervalId);
  }, [state.index]);

  useEffect(() => {
    switch (state.index) {
      case 0:
        dispatch({ type: "MOVE_TO_FIRST_INDEX" });
        break;
      case 1:
        dispatch({ type: "MOVE_TO_SECOND_INDEX" });
        break;
      case 2:
        dispatch({ type: "MOVE_TO_THIRD_INDEX" });
        break;
      case 3:
        dispatch({ type: "MOVE_TO_FORTH_INDEX" });
        break;
      case 4:
        dispatch({ type: "MOVE_TO_FIFTH_INDEX" });
        break;
      default:
        throw new ReferenceError(`Index ${state.index} is not defined`);
    }
  }, [state.index]);

  return (
    <Fragment>
      <div className="courosel-inputs">
        <div className={state.firstInputClassName}/>
        <div className={state.secondInputClassName}/>
        <div className={state.thirdInputClassName}/>
        <div className={state.forthInputClassName}/>
        <div className={state.fifthInputClassName}/>
      </div>
      <div className="courosel-container">
        <div className="courosel">
          <div className={state.firstImgClassName}>
            <img className="courosel-img" src={slides[0]} alt=""/>
          </div>
          <div className={state.secondImgClassName}>
            <img className="courosel-img" src={slides[1]} alt=""/>
          </div>
          <div className={state.thirdImgClassName}>
            <img className="courosel-img" src={slides[2]} alt=""/>
          </div>
          <div className={state.forthImgClassName}>
            <img className="courosel-img" src={slides[3]} alt=""/>
          </div>
          <div className={state.fifthImgClassName}>
            <img className="courosel-img" src={slides[4]} alt=""/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Courosel;

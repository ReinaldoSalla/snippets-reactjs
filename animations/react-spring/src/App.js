import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const Divs = ({ n }) => {
  const content = Array(n).fill(0).map((_, index) => 
    <div key={index}>{index}</div>
  );
  return <div> {content} </div>;
};

const App = () => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: `translateX(-100%)`
    },
    config: { duration: 1000 },
    opacity: 1,
    transform: `translateX(0%)`,
  });
  return (
    <Fragment>
      <Divs n={100}/>
      <animated.div style={spring} className="app">
        text fading in
      </animated.div>
    </Fragment>
  );
};

export default App;
/*
transition shorthand
keyframes shorthand
onTransitionEnd
onKeyframesEnd
trail
something + trail
something + trail + reversed
transition and keyframes interruption
simulating something like useTransition
unmount something from the dom when the transition/keyframes end
read the spec about carousels
recreate the carousel
measuring the performance with and wihout any library
research about thing subject in react

https://ozmoroz.com/2019/03/react-css-transitions/
*/


import React, { useState } from 'react';
import './App.css';

let nCalls = 0;

const App = () => {
  nCalls++;
  console.log(`call #${nCalls}`);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitionFinished, setIsTransitionFinished] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className='app'>
      <div
        className='app__box'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={isHovering ? `app__box-filler app__box-filler--activated` : `app__box-filler`}

        />
      </div>
    </div>
  );
};

export default App;
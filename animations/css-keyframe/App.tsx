/*
transition shorthand
keyframes shorthand
onTransitionEnd
onKeyframesEnd
gracefull interruption of a keyframe https://stackoverflow.com/questions/7694323/css3-animation-on-hover-force-entire-animation
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
how to compare two methods and see which one has the best performance
https://ozmoroz.com/2019/03/react-css-transitions/
https://medium.com/javascript-in-plain-english/applying-css-transitions-with-react-hooks-7bd84671bc6b
*/

import React, { useState, useEffect } from "react";

import "./App.css";

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

const Parent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(true);
  const shouldRenderChild = useDelayUnmount(isMounted, 2000);


  const handleToggleClicked = () => {
    setIsMounted(!isMounted);
  };

  return (
    <main>
      <button onClick={handleToggleClicked}>Click me!</button>
      {shouldRenderChild && (
        <h1 className={isMounted ? 'app__box--visible' : 'app__box--invisible'}>Keyframes</h1>
      )}
    </main>
  );
};

export default Parent;

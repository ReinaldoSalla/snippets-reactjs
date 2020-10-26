import React, { Fragment, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

const AnimatedButton = () => {
  const [state, setState] = useState(false);
  const { x } = useSpring({
    config: { duration: 250 },
    from: { x: 0 },
    to: { x: state ? 1 : 0 }
  });

  const toggle = () => setState(!state);

  return (
    <animated.div
      onClick={toggle}
      style={{
        transform: x
          .interpolate({
            range: [0, 0.5, 1],
            output: [1, 0.75, 1]
          })
          .interpolate(x => `scale(${x}`)
      }}
    >
      <div className='button'>
        click
      </div>
    </animated.div>
  );
};

const App = () => {
  return (
    <div className='app'>
      <div className='button-container'>
        <AnimatedButton />
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import './App.css'

const items = ['JavaScript', 'TypeScript', 'Node', 'React', 'React Native'];
const config = { mass: 5, tension: 2000, friction: 200 }

function App() {
	const [toggle, set] = useState(false);
	
	const toggleState = () => set(!toggle);

  const trail = useTrail(items.length, {
		from: { 
			opacity: 0.5,
			transform: 'translate(-200px, -100px)', 
		},
		to: async (next) => {
			await next ({
				opacity: toggle ? 1 : 0.5,
				transform: toggle ? 'translate(200px, 100px)' : 'translate(-200px, -100px)',
			})
		}
	})

	useEffect(() => {
		const intervalId = setInterval(() => {
			toggleState();
		}, 1000);
		return () => clearInterval(intervalId);
	});

  return (
    <div className="trails-main" onClick={toggleState}>
      <div>
        {trail.map(( animation, index) => 
          <animated.div
            key={items[index]}
            className="trails-text"
            style={animation}
					>
						<div>{items[index]}</div>
          </animated.div>
      	)}
      </div>
    </div>
  );	
}

export default App;
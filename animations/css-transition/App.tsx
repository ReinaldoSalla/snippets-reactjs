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
import React, { useState } from 'react';
import './App.css';

const processCN = (state, block, element, modifier) => {
  const base = `${block}__${element}`;
  return state ? `${base} ${base}--${modifier}` : base;
};

const App = () => {
  const [done, setDone] = useState(false);
  const handleClick = () => setDone(!done);
  const appElementCN = processCN(done, 'app', 'element', 'done');
  return (
    <ul>
      <li className={appElementCN} onClick={handleClick}>learn javascript</li>
      <li className={appElementCN} onClick={handleClick}>learn node</li>
      <li className={appElementCN} onClick={handleClick}>learn react</li>
    </ul>
  );
};

export default App;
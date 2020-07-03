import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './App.css';

const Sidebar = ({ sidebarAnimation }) => (
  <animated.div className='sidebar' style={sidebarAnimation}>
    <nav>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='/#'>JavaScript</a>
        </li>
        <li classaName='sidebar-list'>
          <a href='/#'>Node</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/#'>React</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/#'>React Spring (Animations)</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/#'>React Three Fiber (Graphics)</a>
        </li>
      </ul>
    </nav>
  </animated.div>
);

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const sidebarAnimation = useSpring({
    config: config.gentle,    
    opacity: isSidebarVisible ? 1 : 0,
    transform: isSidebarVisible ? `translateX(0%)` : `translateX(100%)`,
    // right: '10px'
  });

  const toggle = () => setIsSidebarVisible(!isSidebarVisible);

  const sidebarText = isSidebarVisible ? 'Close' : 'Open';

  return (
    <div className='app'>
      <button className='sidebar-button' onClick={toggle}>
        {sidebarText}
      </button>
      <Sidebar sidebarAnimation={sidebarAnimation} />
    </div>
  );
};

export default App;
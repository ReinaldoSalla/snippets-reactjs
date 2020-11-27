import React, { useState, useRef } from 'react';
import processCN from './App.classes';
import './App.css';

const App = () => {
  const [isLeftModalVisible, setIsLeftModalVisible] = useState(false);
  const [isRightModalVisible, setIsRightModalVisible] = useState(false);

  const handleLeftButtonClick = () => {
    setIsLeftModalVisible(!isLeftModalVisible);
  }

  const handleRightButtonClick = () => {
    setIsRightModalVisible(!isRightModalVisible);
  }

  const handleLeftBlur = () => {
    setIsLeftModalVisible(false);
  };

  const handleRightBlur = () => {
    setIsRightModalVisible(false);
  };

  const appLeftModalCN = processCN(
    isLeftModalVisible,
    'app',
    'left-modal',
    'visible'
  );

  const appRightModalCN = processCN(
    isRightModalVisible,
    'app',
    'right-modal',
    'visible'
  );

  const appBoxCN = processCN(
    isLeftModalVisible,
    'app',
    'box',
    'disabled'
  );

  return (
    <div className='app'>
      <button 
        className='app__left-button'
        onBlur={handleLeftBlur}
        onClick={handleLeftButtonClick}
      >
        left button
      </button>
      <button 
        className='app__right-button'
        onBlur={handleRightBlur}  
        onClick={handleRightButtonClick}
      >
        right button
      </button>
      <aside className={appLeftModalCN}>left modal</aside>
      <aside className={appRightModalCN}>right modal</aside>
      <div className='app__box-wrapper'>
        <div className={appBoxCN}>box</div>
      </div>
      {new Array(100).fill(0).map((_, index) => (
        <div key={index}>
          content #{index + 1}
        </div>
      ))}
    </div>
  );
};

export default App;
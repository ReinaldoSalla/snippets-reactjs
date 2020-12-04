import React, { useState, useRef } from 'react';
import processCN from './App.classes';
import './App.css';

const App = () => {
  const [isLeftModalVisible, setIsLeftModalVisible] = useState(false);
  const [isRightModalVisible, setIsRightModalVisible] = useState(false);
  const leftModalDomNode = useRef<any>(null);
  const timeoutId = useRef<any>(null);

  const onLeftButtonClick = () => {
    setIsLeftModalVisible(!isLeftModalVisible);
  }

  // do not close the modal if another child has received focus
  const onLeftModalFocus = () => {
    clearTimeout(timeoutId.current);
  };

  const onLeftModalBlur = () => {
    timeoutId.current = setTimeout(() => {
      setIsLeftModalVisible(false);
    });
  };

  const onClickOutside = (event) => {
    if (isLeftModalVisible && !leftModalDomNode.current.contains(event.target)) {
      setIsLeftModalVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClickOutside);
    return () => window.removeEventListener('click', onClickOutside);
  })

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
        onClick={onLeftButtonClick}
      >
        left button
      </button>
      <aside 
        className={appLeftModalCN}
        onFocus={onLeftModalFocus}  
        onBlur={onLeftModalBlur}
        ref={leftModalDomNode}
      >
        <a href='/#link1'>link1</a>
        <a href='/#link2'>link2</a>
        <a href='/#link3'>link3</a>
      </aside>
      <button 
        className='app__right-button'
      >
        right button
      </button>
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

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const timeoutId = useRef<any>(null);

//   const onFocus = () => {
//     clearInterval(timeoutId.current);
//   };

//   const onBlur = () => {
//     timeoutId.current = setTimeout(() => {
//       setIsOpen(false);
//     });
//   };

//   const onClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div onBlur={onBlur} onFocus={onFocus}>
//       <button onClick={onClick}>Open</button>
//       {isOpen && (
//         <aside>
//           <a href='/#link1'>link1</a> 
//           <a href='/#link2'>link2</a> 
//           <a href='/#link3'>link3</a> 
//         </aside>
//       )}
//     </div>
//   )
// }

// export default App;
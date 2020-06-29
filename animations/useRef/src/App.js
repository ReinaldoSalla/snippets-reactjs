import React, { useRef, Fragment } from "react";
import './App.css';

const data = ['JavaScript', 'Node', 'React'];

let nCalls = 0;

const App = () => {

  const wrapperRef = useRef(null);

  const toggle = () => { 
    wrapperRef.current.classList.toggle('items-on');
  };

  nCalls++;
  console.log(`call n° ${nCalls}`);
  
  return (
    <Fragment>
    <button onClick={toggle}>toggle</button>
      <div ref={wrapperRef} className="items-off">
        {data.map((item, index) =>
          <div key={index} className='item'>
            {item}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default App;
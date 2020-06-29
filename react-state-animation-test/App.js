
import React, {useState, Fragment} from "react";
import "./App.css";

const data = ["JavaScript", 'Node', 'React'];

let nCalls = 0;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const itemsClassName = isVisible ? 'items-on' : 'items-off';

  const toggle = () => setIsVisible(!isVisible);

  nCalls++;
  console.log(nCalls);
  console.log(`call n° ${nCalls}`);

  return (
    <Fragment>
      <button onClick={toggle}>toggle</button>
      <div className={itemsClassName}>
        {data.map((item, index) =>
          <div key={index} className="item">{item}</div>
        )}
      </div>
    </Fragment>
  );
};

export default App;
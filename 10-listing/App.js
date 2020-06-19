import React from "react";
import "./App.css";

const Item = ({ text }) => (
  <div className="item">
    {text}
  </div>
);

const data = new Array(12).fill(0).map((_, index) => ({
  text: `Content ${index + 1}`
}));

const Items = () => {
  const listItems = data.map((item, index) => 
    <Item key={index} text={item.text}/>
  );
  return (
    <div className="items">
      {listItems}
    </div>
  );
};

const App = () => {
  return (
    <Items />
  );
};

export default App;
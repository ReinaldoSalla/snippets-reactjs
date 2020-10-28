import React, { useState } from "react";
import { animated, config, useTransition } from "react-spring";

function reverseTransitions(arr) {
  const result: any = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push({
      ...arr[idx],
      props: arr[arr.length - 1 - idx].props
    });
  }
  return result;
}

let nCalls = 0;

export default function App() {
  nCalls++;
  console.log(`call #${nCalls}`);
  const items = [1, 2, 3, 4];
  const [isActive, setToggled] = useState(false);

  const transitions = useTransition(
    isActive ? items : [], 
    item => item, 
    {
      config: config.gentle,
      unique: true,
      trail: 400 / items.length,
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    }
  );

  const finalTransitions = isActive ? transitions : reverseTransitions(transitions);

  return (
    <div className="App">
      <button onClick={() => setToggled(!isActive)}>Toggle</button>

      {finalTransitions.map(({ key, item, props }) => {
        return (
          <animated.div key={key} style={props}>
            Issue #{item}
          </animated.div>
        );
      })}
    </div>
  );
}
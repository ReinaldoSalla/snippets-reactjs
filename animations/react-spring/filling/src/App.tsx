import { useSpring, animated } from 'react-spring'
import './App.css'
import React, { useRef, useState, useEffect } from 'react'

function App() {
  const [open, toggle] = useState(false)
  const props = useSpring({
    width: open ? '0%' : '100%'
  });
  return (
    <div className="main" onClick={() => toggle(!open)}>
      <animated.div className="fill" style={props} />
    </div>
  )
}

export default App;
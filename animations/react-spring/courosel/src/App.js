import React, { useState, useCallback, useEffect, Fragment } from 'react'
import { useTransition, animated } from 'react-spring'
import './App.css'

const pages = [
  ({ style }) => <animated.div className='courosel-item' style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div className='courosel-item' style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div className='courosel-item' style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

const App = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevState => (prevState + 1) % 3);
    }, 3000)
    return () => clearInterval(intervalId);
  }, [index]);

  const onClick = useCallback(() => setIndex(state => (state + 1) % 3), [])
  
  const transitions = useTransition(index, p => p, {
    initial: { opacity: 1, transform: 'translate3d(0px, 0, 0)', },
    from: { opacity: 1, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0.5, transform: 'translate3d(0px,0,0)' },
  })

  return (
    <Fragment>
      <h1>{index}</h1>
      <div className='courosel-container'>
        <div className="courosel" onClick={onClick}>
          {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default App;
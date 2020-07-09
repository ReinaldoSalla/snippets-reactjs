/*
todo
1-click the last one https://stackoverflow.com/questions/53895676/how-to-use-lodash-to-throttle-multiple-buttons-with-1-throttle
3-why 0px and not 0% or just 0?
4-user goes to another page and comes back seens to thigger the courosel
5-relashion between timer and inputs, because now it seens one breaks the other, maybe use lodash's throttle
5-improve the effect, the current config looks bad
6-make the opacity fells right
5-reducing the size of the buttons with flexbox insted of hardcoding media queies
6-figure out how to handle the hover animation since react spring is taking over the background
*/

import React, {
  useCallback,
  useEffect,
  Fragment,
  useReducer
} from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import './App.css';
import js1 from './assets/js1.png';
import js2 from './assets/js2.jpg';
import js3 from './assets/js3.png';
import js4 from './assets/js4.jpg';
import js5 from './assets/js5.jpg';
import throttle from 'lodash.throttle';

const duration = 1e10;

const CouroselItem = ({ style, img }) => (
  <animated.div className='courosel-item' style={style}>
    <img className='courosel-img' src={img} alt='' />
  </animated.div>
);

const couroselImgs = [js1, js2, js3, js4, js5];

const couroselItems = couroselImgs.map(item =>
  ({ style }) => <CouroselItem style={style} img={item} />
);

const moveToNextItem = (state) => {
  let newIndex = state.index + 1;
  if (newIndex === 5) newIndex = 0;
  return { index: newIndex };
};

const moveToFirstItem = () => ({ index: 0 });

const moveToSecondItem = () => ({ index: 1 });

const moveToThirdItem = () => ({ index: 2 });

const moveToForthItem = () => ({ index: 3 });

const moveToFifthItem = () => ({ index: 4 });

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_TO_NEXT_ITEM':
      return moveToNextItem(state);
    case 'MOVE_TO_FIRST_ITEM':
      return moveToFirstItem();
    case 'MOVE_TO_SECOND_ITEM':
      return moveToSecondItem();
    case 'MOVE_TO_THIRD_ITEM':
      return moveToThirdItem();
    case 'MOVE_TO_FORTH_ITEM':
      return moveToForthItem();
    case 'MOVE_TO_FIFTH_ITEM':
      return moveToFifthItem();
    default:
      throw new ReferenceError(`Action type ${action.type} is not declared`);
  };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });

  const handleNextItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_NEXT_ITEM' })
  ), []);

  const handleFirstItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FIRST_ITEM' })
  ), []);

  const handleSecondItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_SECOND_ITEM' })
  ), []);

  const handleThirdItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_THIRD_ITEM' })
  ), []);

  const handleForthItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FORTH_ITEM' })
  ), []);

  const handleFifthItem = useCallback(() => (
    dispatch({ type: 'MOVE_TO_FIFTH_ITEM' })
  ), []);

  const handleChange = throttle((event) => {
    const value = Object.values(event.target)[1].value;
    console.log(value);
    handleFirstItem();
    //if (value === 'first-input') handleFirstItem();
  }, 1000, { leading: true, trailing: false });
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextItem();
    }, duration);
    return () => clearInterval(intervalId);
  }, [handleNextItem]);

  const transitions = useTransition(state.index, p => p, {
    config: { mass: 2, tension: 70, friction: 24, precision: 0.001 },
    initial: { opacity: 1, transform: 'translate3d(0%, 0, 0)', },
    from: { opacity: 1, transform: 'translate3d(-100%,0,0)', },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)',  },
    leave: { opacity: 1, transform: 'translate3d(0,0,0)' },
  });

  const firstInputAnimation = useSpring({
    config: { duration: 500 },
    background: state.index === 0 ? 'white' : 'rgba(0, 0, 0, 0.1)',
  });

  const secondInputAnimation = useSpring({ 
    config: { duration: 500 },
    to: { background: state.index === 1 ? 'white': 'rgba(0, 0, 0, 0.1)' }
  });

  const thirdInputAnimation = useSpring({
    config: { duration: 500 },
    to: { background: state.index === 2 ? 'white' : 'rgba(0, 0, 0, 0.1)' }
  });

  const forthInputAnimation = useSpring({
    config: { duration: 500 },
    to: { background: state.index === 3 ? 'white' : 'rgba(0, 0, 0, 0.1)' }
  });

  const fifthInputAnimation = useSpring({
    config: { duration: 500 },
    to: { background: state.index === 4 ? 'white' : 'rgba(0, 0, 0, 0.1)' }
  });

  return (
    <Fragment>
      <h1>{state.index}</h1>
      <div className='courosel-container'>
        <div className="courosel">
          {transitions.map(({ item, props, key }) => {
            const Page = couroselItems[item]
            return <Page key={key} style={props} />
          })}
        </div>
      </div>
      <div className='courosel-inputs-container'>
        <div className='courosel-inputs'>
          <animated.div 
            style={firstInputAnimation}
            className='courosel-input' 
            onClick={(event) => {event.persist(); handleChange(event)}} 
            // onClick={handleFirstItem}
            value='first-input'
          />
          <animated.div 
            style={secondInputAnimation}
            className='courosel-input' 
            onClick={handleSecondItem} 
            value='second-input'
          />
          <animated.div 
            style={thirdInputAnimation}
            className='courosel-input' 
            onClick={handleThirdItem} 
            value='third-input'
          />
          <animated.div 
            style={forthInputAnimation}
            className='courosel-input' 
            onClick={handleForthItem} 
            value='forth-input'
          />
          <animated.div 
            style={fifthInputAnimation}
            className='courosel-input' 
            onClick={handleFifthItem} 
            value='fifth-input'
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App;
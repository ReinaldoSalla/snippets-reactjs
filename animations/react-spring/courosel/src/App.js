/*
todo
1-maybe use transitions for the inputs, because togglin between the same properties in react-spring and css may noy  be the best way to use, and its another way to familiarize with useTransition
1-click the last one
3-why 0px and not 0% or just 0?
4-user goes to another page and comes back seens to thigger the courosel
5-relashion between timer and inputs, because now it seens one breaks the other, maybe use lodash's throttle
6-make the opacity fells right
5-reducing the size of the buttons with flexbox insted of hardcoding media queies
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

const duration = 5000;

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextItem();
    }, duration)
    return () => clearInterval(intervalId);
  }, [handleNextItem]);

  const transitions = useTransition(state.index, p => p, {
    config: { mass: 2, tension: 70, friction: 24, precision: 0.001 },
    initial: { opacity: 1, transform: 'translate3d(0%, 0, 0)', },
    from: { opacity: 1, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 1, transform: 'translate3d(0,0,0)' },
  });

  const props = useSpring({
    background: 'white'
  });

  const styleFirstInput = state.index === 0 ? props : null;

  const styleSecondInput = state.index === 1 ? props : null;

  const styleThirdInput = state.index === 2 ? props : null;

  const styleForthInput = state.index === 3 ? props : null;

  const styleFifthInput = state.index === 4 ? props : null;

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
            style={styleFirstInput} 
            className='courosel-input' 
            onClick={handleFirstItem} 
          />
          <animated.div 
            style={styleSecondInput}
            className='courosel-input' 
            onClick={handleSecondItem} 
          />
          <animated.div 
            style={styleThirdInput}
            className='courosel-input' 
            onClick={handleThirdItem} 
          />
          <animated.div 
            style={styleForthInput}
            className='courosel-input' 
            onClick={handleForthItem} 
          />
          <animated.div 
            style={styleFifthInput}
            className='courosel-input' 
            onClick={handleFifthItem} 
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App;
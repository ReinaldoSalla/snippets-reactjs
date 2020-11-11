import React, { useReducer, useEffect } from 'react';
import { useSpring, useTransition } from 'react-spring';
import { CarouselWrapper } from './Carousel.styles';
import components from './Carousel.mapper';
import initialState from './Carousel.init';
import { 
  carouselTransitionProps,
  getspring 
} from './Carousel.animations';
import reducer from './Carousel.reducer';
import CONSTANTS from './Carousel.constants';
import CarouselInput from '../CarouselInput';
import CarouselBackground from '../CarouselBackground';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';

const Carousel = ({
  scrollToJavascript,
  scrollToReact,
  scrollToNode,
  isSidebarVisible,
  closeSidebar
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const transitions = useTransition(state.index, null, {
    ...carouselTransitionProps,
    order: ['leave', 'enter', 'update']
  });
  const isDocumentVisible: boolean = useDocumentVisibility();

  const handleFirstClick = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
  };

  const handleSecondClick = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM});
  };

  const handleThirdClick = () => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
  };

  useEffect(() => {
    const handleNextItem = () => {
      console.log('should dispatch action');
      dispatch({ type: CONSTANTS.MOVE_TO_NEXT_ITEM });
    };

    if (isDocumentVisible) {
      const intervalId = setInterval(() => {
        handleNextItem();
      }, CONSTANTS.DURATION);
      return () => clearInterval(intervalId);
    }
  });

  const spring = useSpring(getspring(isSidebarVisible));

  return (
    <>
      <CarouselBackground />
      <CarouselWrapper 
        style={spring}
        onClick={closeSidebar}
      >
        {transitions.map(({ item, props, key }) => {
          const Component = components[item];
            return (
              <Component 
                key={key}
                style={props}
                scrollToJavascript={scrollToJavascript}
                scrollToReact={scrollToReact}
                scrollToNode={scrollToNode}
                isSidebarVisible={isSidebarVisible}
              />
            );
        })}
        <CarouselInput 
          handleFirstClick={handleFirstClick}
          handleSecondClick={handleSecondClick}
          handleThirdClick={handleThirdClick}
          index={state.index}
          isSidebarVisible={isSidebarVisible}
        />
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
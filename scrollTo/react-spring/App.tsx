//user interrupts the scrollTo problem
//https://github.com/react-spring/react-spring/issues/544

import React, { Fragment, useRef, useEffect, useState, useCallback } from 'react'
import { useSpring, config } from 'react-spring';
import styled from 'styled-components';
import * as easings from 'd3-ease';

interface ButtonProps {
  top: string;
}

const Button = styled.button<ButtonProps>`
  position: fixed;
  top: ${props => props.top};
  right: 50px;
`;

const Divs = ({ 
  firstRef, 
  secondRef,
  thirdRef,
  forthRef 
}) => {
  return (
    <Fragment>
      <h1 ref={firstRef}>first breakpoint</h1>
      {new Array(200).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={secondRef}>second breakpoint</h1>
      {new Array(200).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={thirdRef}>third breakpoint</h1>
      {new Array(200).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={forthRef}>forth breakpoint</h1>
      {new Array(200).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
    </Fragment>
  );
};

export default function App() {
  const [firstOffsetTop, setFirstOffsetTop] = useState(0);
  const [secondOffsetTop, setSecondOffsetTop] = useState(0);
  const [thirdOffsetTop, setThirdOffsetTop] = useState(0);
  const [forthOffsetTop, setForthOffsetTop] = useState(0);
  const [_, setY]: any = useSpring(() => ({ y: 0 }));

  const firstRef = useCallback(node => {
    if (node !== null) setFirstOffsetTop(node.offsetTop)
  }, []);

  const secondRef = useCallback(node => {
    if (node !== null) setSecondOffsetTop(node.offsetTop)
  }, []);

  const thirdRef = useCallback(node => {
    if (node !== null) setThirdOffsetTop(node.offsetTop)
  }, []);

  const forthRef = useCallback(node => {
    if (node !== null) setForthOffsetTop(node.offsetTop);
  }, []);

  const onClickFirst = () => {
    setY({
      config: config.default,
      y: firstOffsetTop,
      reset: true,
      from: { y: window.scrollY },
      onFrame: (props) => window.scroll(0, props.y)
    });
  };

  const onClickSecond = () => {
    setY({
      config: config.default,
      y: secondOffsetTop,
      reset: true,
      from: { y: window.scrollY },
      onFrame: (props) => window.scroll(0, props.y)
    });  
  };

  const onClickThird = () => {
    setY({
      config: config.default,
      y: thirdOffsetTop,
      reset: true,
      from: { y: window.scrollY },
      onFrame: (props) => window.scroll(0, props.y)
    });  
  };

  const onClickForth = () => {
    setY({
      config: { 
        duration: 4000, 
        easing: t => (1 - Math.cos(Math.PI * t)) / 2 
      },
      // config: config.default,
      y: forthOffsetTop,
      reset: true,
      from: { y: window.scrollY },
      onFrame: (props) => window.scroll(0, props.y)
    });  
  };

  return (
    <Fragment>
      <Button top='50px' onClick={onClickFirst}>first breakpoint</Button>
      <Button top='80px' onClick={onClickSecond}>second breakpoint</Button>
      <Button top='110px' onClick={onClickThird}>third breakpoint</Button>
      <Button top='140px' onClick={onClickForth}>forth breakpoint</Button>
      <Divs 
        firstRef={firstRef} 
        secondRef={secondRef}
        thirdRef={thirdRef}
        forthRef={forthRef}
      />
    </Fragment>
  );
}

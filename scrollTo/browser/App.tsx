import React, { Fragment, useRef, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components';

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
      {new Array(100).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={secondRef}>second breakpoint</h1>
      {new Array(100).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={thirdRef}>third breakpoint</h1>
      {new Array(100).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={forthRef}>forth breakpoint</h1>
      {new Array(100).fill(0).map((_, index) => 
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
    window.scroll({ top: firstOffsetTop, behavior: 'smooth' });
  };

  const onClickSecond = () => {
    window.scroll({ top: secondOffsetTop, behavior: 'smooth' });
  };

  const onClickThird = () => {
    window.scroll({ top: thirdOffsetTop, behavior: 'smooth' });
  };

  const onClickForth = () => {
    window.scroll({ top: forthOffsetTop, behavior: 'smooth' });
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
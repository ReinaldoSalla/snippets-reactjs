import React, { Fragment, useRef, useEffect } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
`;

const Divs = ({ num }) => {
  const firstRef: any = useRef(null);
  const secondRef: any = useRef(null);
  const thirdRef: any = useRef(null);
  const forthRef: any = useRef(null);

  useEffect(() => {
    console.log(firstRef.current.offsetTop);
    console.log(secondRef.current.offsetTop);
    console.log(thirdRef.current.offsetTop);
    console.log(forthRef.current.offsetTop);
  }, []);

  return (
    <Fragment>
      <h1 ref={firstRef}>first breakpoint</h1>
      {new Array(num).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={secondRef}>second breakpoint</h1>
      {new Array(num).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={thirdRef}>third breakpoint</h1>
      {new Array(num).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
      <h1 ref={forthRef}>forth breakpoint</h1>
      {new Array(num).fill(0).map((_, index) => 
        <div key={index}>
          content #{index + 1}
        </div>
      )}
    </Fragment>
  );
};

export default function App() {
  const onClick = () => {
    window.scroll({ top: 3783, behavior: 'smooth' });
  }
  return (
    <Fragment>
      <Button onClick={onClick}>
        back to top
      </Button>
      <Divs num={100}/>
    </Fragment>
  );
}

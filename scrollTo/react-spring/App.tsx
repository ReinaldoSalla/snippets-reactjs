//user interrupts the scrollTo problem
//https://github.com/react-spring/react-spring/issues/544

import React, { Fragment, useState } from 'react'
import { useSpring } from 'react-spring'
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Divs = ({ num }) => (
  <Fragment>
    {new Array(num).fill(0).map((_, index) => 
      <div key={index}>
        content #{index + 1}
      </div>
    )}
  </Fragment>
)

export default function App() {
  const [_, setY]: any = useSpring(() => ({ y: 0 }));
  const onClick = () => {
    setY({
      y: 0,
      reset: true,
      from: { y: window.scrollY },
      onFrame: props => window.scroll(0, props.y)
    })
  }
  return (
    <Fragment>
      <h1>top</h1>
      <Button onClick={onClick}>
        back to top
      </Button>
      <Divs num={100}/>
    </Fragment>
  );
}



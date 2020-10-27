/*
reverse a transition
https://codesandbox.io/s/react-spring-reverse-transition-3e9ut?file=/src/App.js
*/

import React, { useState, useRef, useEffect } from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import { 
  ButtonContainer,
  Button,
  Container,
  Item
} from './Sidebar.styles';

const data = [
  {
    text: 'JavaScript',
    key: 0,
  },
  {
    text: 'TypeScript',
    key: 1,
  },
  {
    text: 'Node',
    key: 2
  },
  {
    text: 'React',
    key: 3
  },
  {
    text: 'React Native',
    key: 4
  },
];

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const springRef: any = useRef();
  const transRef: any = useRef();

  const handleClick = () => setIsActive(!isActive);

  const spring = useSpring({
    ref: springRef,
    from: { 
      opacity: 0, 
      transform: 'translate3d(-100%, 0, 0)'
    },
    to: async (next) => {
      await next({
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0 0)'
      });
    },
  });

  const transitions = useTransition(
    isActive ? data : [], 
    item => item.key, 
    {
      ref: transRef,
      unique: true,
      trail: 500 / data.length,
      from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
      leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' } 
    }
  );

  useChain(
    isActive ? [springRef, transRef] : [transRef, springRef],
    [0, isActive ? 0.3 : 0.4]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive(!isActive)
    }, 1e6);
    return () => clearInterval(intervalId);
  }, [isActive]);

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleClick}>
          toggle
        </Button>
      </ButtonContainer>
      <Container style={spring}>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={props}>
            {item.text}
          </Item>
        ))}
      </Container>
    </>
  );
};

export default Sidebar;
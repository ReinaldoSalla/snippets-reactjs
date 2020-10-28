import React, { useState, useRef, useEffect } from 'react';
import { useTransition, useChain } from 'react-spring';
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
  const isMounted: any = useRef(true);

  const handleClick = () => setIsActive(!isActive);

  const spring = useTransition(isActive, null, {
    ref: springRef,
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
  });

  const transitions = useTransition(isActive ? data : [], item => item.key, {
    ref: transRef,
    unique: true,
    trail: 500 / data.length,
    from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }
  });

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

  useEffect(() => {
    return () => {
      isMounted.current = false
    };
  }, []);

  return (
    <>
      <ButtonContainer>
        <Button onClick={handleClick}>
          toggle
        </Button>
      </ButtonContainer>
      {spring.map(({ item, key, props }) => (
        item ? (
          <Container key={key} style={props}>
            {transitions.map(({ item: innerItem, key: innerKey, props: innerProps }) => (
              <Item key={innerKey} style={innerProps}>
                {innerItem.text}
              </Item>
            ))}
          </Container>
        ) : (
          null
        )
      ))}
    </>
  );
};

export default Sidebar;
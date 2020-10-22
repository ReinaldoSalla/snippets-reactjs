import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Wrapper = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Filler = styled(animated.div)`
  position: absolute;
  background: red;
  width: 100%;
`;

export default () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const animation = useSpring({
    config: isHovering
      ? { mass: 1, tension: 170, friction: 26 }
      : { mass: 2, tension: 170, friction: 26, clamp: true },
    from: { height: '0%' },
    to: async (next) => {
      await next({ height: isHovering ?  '100%' : '0%' });
    }
  });

  return (
    <Wrapper onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Filler style={animation} />
    </Wrapper>
  );
};


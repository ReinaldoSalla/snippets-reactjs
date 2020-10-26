
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Box = styled(animated.div)`
  width: 200px;
  height: 200px;
  background: red;
  margin: 100px 0 0 100px;
`;

export default () => {
  const [isPositionLeft, setIsPositionLeft] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsPositionLeft(!isPositionLeft);
    }, 250);
    return () => clearInterval(intervalId);
  }, [isPositionLeft]);

  const animation = useSpring({
    from: { transform: 'translate(0%, 0%)'},
    to: async (next, _) => {
      await next({ transform: isPositionLeft ? 'translate(0%, 0%)' : 'translate(150%, 0%)'})
    }
  });

  return <Box style={animation} />
};

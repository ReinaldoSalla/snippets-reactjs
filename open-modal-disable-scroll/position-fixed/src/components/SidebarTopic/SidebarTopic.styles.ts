import styled from 'styled-components';
import { animated } from 'react-spring';

const Wrapper = styled(animated.section)`
  margin: 0 0 0 24px;
`;

const Title = styled.h2`
  color: white;
  margin: 32px 0 0 0;
`;

const Topics = styled.ul`
  margin-bottom: 32px;
`;

const Topic = styled.li`
  margin: 8px 0;
`;

const Text = styled.span`
  color: white;
  transition: color 250ms;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export { 
  Wrapper,
  Title,
  Topics,
  Topic,
  Text
};
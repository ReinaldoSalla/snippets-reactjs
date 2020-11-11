import styled from 'styled-components';
import { animated } from 'react-spring';

const Exit = styled(animated.button)`
  position: fixed;
  top: 8px;
  right: 8px;
  font-size: 28px;
  width: 28px;
  height: 28px;
  color: white;
  transition: color 250ms;
  font-family: sans-serif;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export default Exit;
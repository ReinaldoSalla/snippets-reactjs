import styled from 'styled-components';
import { animated } from 'react-spring';

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Button = styled.button`
  border: 1px solid black;
  padding: 16px;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const Menu = styled(animated.aside)`
  border: 1px solid black;
  position: absolute;
  top: 64px;
  left: 0;
  background: lightblue;
  height: 500px;
  width: 250px;
`;

export {
  ButtonContainer,
  Button,
  Menu
};
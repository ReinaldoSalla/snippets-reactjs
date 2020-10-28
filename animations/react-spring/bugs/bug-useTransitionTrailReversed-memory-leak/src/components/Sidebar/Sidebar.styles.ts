import styled from 'styled-components';
import { animated } from 'react-spring';

const ButtonContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
`

const Button = styled.button`
  border: 1px solid black;
  padding: 16px;
`;

const Container = styled(animated.div)`
  position: fixed;
  top: 80px;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background: gray;
`;

const Item = styled(animated.span)`
  margin: 16px;
  height: 50px;
  width: 200px;
  border-radius: 5px;
  will-change: transform, opacity;
`;

export {
  ButtonContainer,
  Button,
  Container,
  Item
}
import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2em;
  margin: 2em;
  width: 3em;
  border: 1px solid black;
  transition: transform 500ms;
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const BaseLayout = () => (
  <Fragment>
    <Wrapper>
      JavaScript
    </Wrapper>
    <Wrapper>
      React
    </Wrapper>
  </Fragment>
)

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);

export default App;
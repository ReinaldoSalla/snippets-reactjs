import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './App.styles';

const Wrapper = styled.div`
  display: flex;
  border: 5px solid red;
  flex-wrap: wrap;
  padding: 1em 1em;
`;

const Item = styled.div`
  flex: 1 1 300px;
  border: 1px solid black;
  height: 150px;
  margin: 2em;
`;

export default () => (
  <>
    <GlobalStyle />
    <Wrapper>
      {new Array(12).fill(0).map((_, index) => (
        <Item key={index} />
      ))}
    </Wrapper>
  </>
);
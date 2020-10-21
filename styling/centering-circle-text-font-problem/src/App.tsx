import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './App.styles';

const Wrapper = styled.ul`
  padding: 0 0 0 1em;
  border: 1px solid black;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1em;

  &:nth-of-type(1) {
    margin-top: 1em;
  }
`;

const Circle = styled.div`
  width: 1em;
  height: 1em;
  border: 1px solid black;
  border-radius: 50%;
  background: black;
`;

const SansSerif = styled.span`
  font-size: 1em;
  line-height: 0.7;
  font-family: sans-serif;
`;

const SegoeUI = styled.span`
  font-size: 1em;
  line-height: 0.7;
  font-family: 'Segoe UI';
  /* transform: translate(0, -10%); */
`;

export default () => (
  <>
    <GlobalStyle />
    <Wrapper>
      {new Array(12).fill(0).map((_, index) => (
        <Item key={index}>
          <Circle/>
          <SansSerif>Sansserif</SansSerif>
          <SegoeUI>Seguoeui</SegoeUI>
        </Item>
      ))}
    </Wrapper>
  </>
);
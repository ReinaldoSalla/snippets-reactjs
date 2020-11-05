import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './App.styles';
import 'fontsource-source-sans-pro';
import 'fontsource-open-sans';

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
  width: 2em;
  height: 2em;
  border: 1px solid black;
  border-radius: 50%;
  background: black;
`;

const Times = styled.span`
  font-size: 2em;
  font-family: 'Times New Roman';
`;

const SansSerif = styled.span`
  font-size: 2em;
  line-height: 0.7;
  font-family: sans-serif;
`;

const SegoeUI = styled.span`
  font-size: 2em;
  /* line-height: 0.7; */
  font-family: 'Segoe UI';
  /* transform: translate(0, -10%); */
  border: 1px solid black;
  padding: 16px;
`;

const OpenSans = styled.span`
  font-size: 2em;
  font-family: 'Open Sans';
  /* line-height: 0.7; */
  border: 1px solid black;
  padding: 16px;
`;

const SourceSansPro = styled.span`
  font-size: 2em;
  font-family: 'Source Sans Pro';
  border: 1px solid black;
  padding: 16px;
`

export default () => (
  <>
    <GlobalStyle />
    <Wrapper>
      {new Array(12).fill(0).map((_, index) => (
        <Item key={index}>
          <Circle/>
          {/* <Times>Javascript queue</Times> */}
          {/* <SansSerif>AAA</SansSerif> */}
          <SegoeUI>Javascript queue</SegoeUI>
          <OpenSans>Javascript queue</OpenSans>
          <SourceSansPro>Javascript queue</SourceSansPro>
        </Item>
      ))}
    </Wrapper>
  </>
);
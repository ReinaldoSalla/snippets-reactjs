/*
Conclusions
1 - don't create a border-radius. Instead, create a wrapper around the icon
2 - style straight into styled components, no need to use the provider
*/

import React, { Fragment } from 'react';
import { ReactComponent as SidebarTmpSvg } from '../../assets/icons/sidebar.svg';
import styled from 'styled-components';

interface WrapperProps {
  height: string;
  width: string
  border: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: ${props => props.height};
  width: ${props => props.width};
  border: ${props => props.border ? '1px solid black' : 'none'};
  border-radius: 50%;
`;

interface SvgProps {
  height: string;
  width: string;
}

const Svg = styled.div<SvgProps>`
  height: ${props => props.height};
  width: ${props => props.width};
`;

const IconTester = ({
  wrapperHeight='1rem',
  wrapperWidth='1rem',
  svgHeight='1rem',
  svgWidth='1rem',
  border=false
}) => {
  return (
    <Wrapper height={wrapperHeight} width={wrapperWidth} border={border}>
      <Svg as={SidebarTmpSvg} height={svgHeight} width={svgWidth}/>
    </Wrapper>
  );
};

const App = () => (
  <Fragment>
    <IconTester 
      border={true}
      wrapperHeight='3rem'
      wrapperWidth='3rem'
      svgHeight='3rem'
      svgWidth='3rem'
    />
    <IconTester 
      border={true} 
      wrapperHeight='3rem' 
      wrapperWidth='3rem' 
      svgHeight='2rem'
      svgWidth='2rem'
    />
  </Fragment>
);

export default App;
import React from 'react';
import { Wrapper, Svg } from './Icon.styles';

const Icon = ({
  svg,
  style={},
  width='2.5rem',
  height='2.5rem',
  padding='0.625rem',
  margin='0',
  border='1px solid black',
  color='black'
}) => {
  return (
    <Wrapper 
      style={style}
      width={width} 
      height={height}
      padding={padding}
      margin={margin} 
      border={border}
    >
      <Svg as={svg} width={width} height={height} color={color}/>
    </Wrapper>
  );
};

export default Icon;
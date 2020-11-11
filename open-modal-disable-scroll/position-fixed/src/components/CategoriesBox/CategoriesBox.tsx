import React from 'react';
import {
  Wrapper,
  IconWrapper,
  Icon,
  Title,
  DescriptionWrapper,
  Description,
  Check
} from './CategoriesBox.styles';

const CategoriesBox = ({ 
  title, 
  description, 
  path,
  Svg,
  isSidebarVisible
}) => (
  <Wrapper to={path} $isSidebarVisible={isSidebarVisible}>
    <IconWrapper >
      <Icon as={Svg} />
    </IconWrapper>
    <Title >
      {title}
    </Title>
    <DescriptionWrapper >
      <Description >
        {description}
      </Description>
    </DescriptionWrapper>
    <Check >
      Check {title} →
    </Check>
  </Wrapper>
);

export default CategoriesBox;
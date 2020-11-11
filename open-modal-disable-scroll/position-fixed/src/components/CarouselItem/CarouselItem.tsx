import React, { useState, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CarouselItemWrapper,
  CarouselItemTitle,
  CarouselItemDescription,
  CarouselItemCheckWrapper,
  CarouselItemCheck
} from './CarouselItem.styles';
import getCarouselItemProps from './CarouselItem.animations';
import { CarouselItemProps } from './CarouselItem.types'; 

const getWhichElement = (
  name,
  scrollToJavascript,
  scrollToReact,
  scrollToNode
) => {
  switch (name) {
    case 'javascript':
      return scrollToJavascript;
    case 'react':
      return scrollToReact;
    case 'node':
      return scrollToNode;
    default:
      throw new Error(`Name ${name} is undefined`);
  }
};

const CarouselItem: FunctionComponent<CarouselItemProps> = ({ 
  style, 
  name, 
  title, 
  description, 
  check, 
  scrollToJavascript,
  scrollToReact,
  scrollToNode,
  isSidebarVisible
}): JSX.Element  => {
  const [isHovering, setIsHovering] = useState(false);

  const animationProps = useSpring(getCarouselItemProps(isHovering));

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  const scrollToElement = getWhichElement(
    name,
    scrollToJavascript,
    scrollToReact,
    scrollToNode
  );

  return (
    <CarouselItemWrapper style={style}>
      <CarouselItemTitle
        onClick={scrollToElement}
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        $isSidebarVisible={isSidebarVisible}
      >
        {title}
      </CarouselItemTitle>
      <CarouselItemDescription
        onClick={scrollToElement}
        style={animationProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        $isSidebarVisible={isSidebarVisible}
      >
        {description}
      </CarouselItemDescription>
      <CarouselItemCheckWrapper>
        <CarouselItemCheck
          onClick={scrollToElement}
          style={animationProps}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          $isSidebarVisible={isSidebarVisible}
        >
          {check}
        </CarouselItemCheck>
      </CarouselItemCheckWrapper>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
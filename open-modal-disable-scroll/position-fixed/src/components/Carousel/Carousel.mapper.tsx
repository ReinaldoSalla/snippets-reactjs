import React from 'react';
import markup from './Carousel.markup';
import CarouselItem from '../CarouselItem';

const components = markup.map(({ name, title, description, check }) => (
  ({ style, scrollToJavascript, scrollToReact, scrollToNode, isSidebarVisible }) => (
    <CarouselItem 
      style={style}
      name={name}
      title={title}
      description={description}
			check={check}
			scrollToJavascript={scrollToJavascript}
			scrollToReact={scrollToReact}
      scrollToNode={scrollToNode}
      isSidebarVisible={isSidebarVisible}
    />
  )
));

export default components;
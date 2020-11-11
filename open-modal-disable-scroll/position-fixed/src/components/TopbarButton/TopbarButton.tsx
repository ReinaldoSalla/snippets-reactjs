import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { getTopbarButtonAnimation } from './TopbarButton.animations';
import {
  TopbarButtonWrapper,
  TopbarButtonNormalizer,
  TopbarButtonSvg,
  TopbarButtonText,
  TopbarButtonFiller
} from './TopbarButton.styles';
import { animated } from 'react-spring';

const TopbarButton = ({
  Svg,
  text,
  title,
  tag,
  handleClick,
  adjustSvg=false,
  svgAnimation={}
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const topbarButtonFillerAnimation = useSpring(getTopbarButtonAnimation(
    isHovering
  ));

  return (
    <TopbarButtonWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={handleClick}  
      title={title}
      as={tag}
      to='/'
    >
      <TopbarButtonNormalizer>
        <TopbarButtonSvg 
          style={svgAnimation} 
          as={animated(Svg)} 
          adjustSvg={adjustSvg}
        />
      </TopbarButtonNormalizer>
      <TopbarButtonText>
        {text}
      </TopbarButtonText>
      <TopbarButtonFiller style={topbarButtonFillerAnimation} />
    </TopbarButtonWrapper>
  );
};

export default TopbarButton;
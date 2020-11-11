import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { 
  getHoverAnimation,
  getSvgAnimation
} from './TopbarSearch.animations';
import {
  TopbarSearchWrapper,
  TopbarSearchNormalizer,
  TopbarSearchSvg,
  TopbarSearchText,
  TopbarSearchFiller
} from './TopbarSearch.styles';

const TopbarSearch = ({ isSearchVisible, toggleSearch }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => setIsHovering(true);

  const handleLeave = () => setIsHovering(false);

  const hoverSpring = useSpring(getHoverAnimation(isHovering));

  const svgSpring = useSpring(getSvgAnimation(isSearchVisible));

  return (
    <TopbarSearchWrapper 
      onMouseEnter={handleEnter} 
      onMouseLeave={handleLeave}
      onClick={toggleSearch}  
    >
      <TopbarSearchNormalizer style={svgSpring}>
        <TopbarSearchSvg />
      </TopbarSearchNormalizer>
      <TopbarSearchText>
        Search
      </TopbarSearchText>
      <TopbarSearchFiller style={hoverSpring} />
    </TopbarSearchWrapper>
  );
};

export default TopbarSearch;
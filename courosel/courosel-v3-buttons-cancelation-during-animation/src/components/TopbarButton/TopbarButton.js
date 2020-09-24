import React, { useState } from 'react';
import './TopbarButton.css';

const TopbarButton = ({ Svg, text, large=false }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleEnter = () => setIsHovering(true);
  const handleLeave = () => setIsHovering(false);
  return (
    <button 
      className='topbarbutton' 
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className='topbarbutton-normalizer'>
        <Svg className={`topbarbutton-svg${large ? '-large' : ''}`} />
      </div>
      <span className='topbarbutton-text'>
        {text}
      </span>
      <div className={`topbarbutton-filler${isHovering ? ' topbarbutton-fillter-transition' : ''}`} />
    </button>
  );
};

export default TopbarButton;
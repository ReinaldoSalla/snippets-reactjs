import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(window.innerWidth)
    }, 1000);
    window.addEventListener('resize', handleResize);
    return () => window.addEventListener('resize', handleResize);
  }, [window.innerWidth]);
  return width;
  // return 1000;
};

export default useWidth;                                               
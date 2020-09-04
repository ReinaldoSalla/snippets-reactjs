import { useEffect, useState, useCallback } from 'react';

interface UseResize {
  width: number;
  height: number;
}

const useResize = (): UseResize => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
		window.addEventListener('resize', () => {
      setHeight(window.innerHeight); 
      setWidth(window.innerWidth)
    });
		return () =>
			window.removeEventListener('resize', () => {
        setHeight(window.innerHeight); 
        setWidth(window.innerWidth)
      });
	});
	return {width, height};
};

export default useResize;
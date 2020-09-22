import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

interface UseResize {
	width: number;
	height: number;
}

const useResize = (): UseResize => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [height, setHeight] = useState<number>(window.innerHeight);

	useEffect(() => {
		const handleResize = debounce(() => {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
		}, 100);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [width, height]);
  return { width, height };
};

export default useResize;

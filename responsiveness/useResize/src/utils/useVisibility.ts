import { useState, useRef, useEffect, MutableRefObject } from 'react';

const topbarHeight = 80;

// stage 1, has to be negative or zero
const isBottomVisible = (bottom, height) => bottom - height <= 0;

// state 2, has to be positive
const isTopVisible = (top) => top - topbarHeight > 0;

// check is the entire box is visible in the viewport
const checkIsVisible = (bottom, top, height) =>
	isBottomVisible(bottom, height) && isTopVisible(top);

const useVisibility = (): [boolean, MutableRefObject<HTMLDivElement>] => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const currentElement = useRef<HTMLDivElement>(null!);

	const handleScroll = () => {
		setIsVisible(
			checkIsVisible(
				currentElement.current?.getBoundingClientRect().bottom,
				currentElement.current?.getBoundingClientRect().top,
				window.innerHeight
			)
		);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return [isVisible, currentElement];
};

export default useVisibility;

import CONSTANTS from '../Carousel/Carousel.constants';

const CarouselTimerOffset = 15;

const CarouselTimerAnimation = {
  config: { duration: CONSTANTS.DURATION },
  from: { width: 0, opacity: 0 },
  to: { width: 99, opacity: 1 },
  reset: true
};

const getTextProps = (currentIndex: number, targetIndex: number): any => ({
	config: { duration: 2000 },
	color: currentIndex === targetIndex ? 'black' : 'white',
});

const getInnerProps = (currentIndex: number, targetIndex: number): any => ({
	config: { duration: 2000 },
	background: currentIndex === targetIndex ? 'white' : 'rgba(0, 0, 0, 0)',
	width: currentIndex === targetIndex ? '100%' : '0%',
});

export { 
  CarouselTimerAnimation, 
  CarouselTimerOffset,
  getTextProps,
  getInnerProps 
};
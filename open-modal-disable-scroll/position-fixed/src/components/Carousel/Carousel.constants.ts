import components from './Carousel.mapper';

const CONSTANTS = {
	DURATION: 15e3,
	LENGTH: components.length,
	MOVE_TO_NEXT_ITEM: 'MOVE_TO_NEXT_ITEM' as const,
	MOVE_TO_FIRST_ITEM: 'MOVE_TO_FIRST_ITEM' as const,
	MOVE_TO_SECOND_ITEM: 'MOVE_TO_SECOND_ITEM' as const,
	MOVE_TO_THIRD_ITEM: 'MOVE_TO_THIRD_ITEM' as const,
};

export default CONSTANTS;
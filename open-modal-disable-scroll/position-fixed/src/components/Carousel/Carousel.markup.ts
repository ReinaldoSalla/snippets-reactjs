import { titleGenerator, checkGenerator } from './Carousel.utils';

const markup = [
	{
		name: 'javascript',
		title: titleGenerator('JavaScript'),
		description: 'From data processing to asyncronous programming',
		check: checkGenerator('JavaScript'),
	},
	{
		name: 'react',
		title: titleGenerator('React'),
		description: 'Modern frontend development with the popular facebook library',
		check: checkGenerator('React'),
	},
	{
		name: 'node',
		title: titleGenerator('Node'),
		description:
			'Dynamic backend structures with Node and GraphQl',
		check: checkGenerator('Node'),
	},
];

export default markup;
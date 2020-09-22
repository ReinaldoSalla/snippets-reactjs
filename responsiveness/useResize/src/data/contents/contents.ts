import { Contents } from './contents.interfaces';

const contents: Contents = {
	javascript: {
		title: 'JavaScript',
		items: [
			'Data Structures',
			'Functions',
			'Conditionals',
			'Loops',
			'Map',
			'Filter',
			'Reduce',
			'Try Catch',
			'Closures',
			'Iterators',
			'Generators',
			'Callbacks',
			'Promises',
			'Async Await',
			// timers
		],
	},
	typescript: {
		title: 'TypeScript',
		items: ['Types', 'Interfaces', 'Generics', 'Decorators'],
	},
	react: {
		title: 'React',
		items: [
			'Rendering',
			'Styling',
			'State',
			'Props',
			'Side Effects',
			'Context',
			'Refs',
			'Memoization',
			'Routing',
			'Plots',
			'Animation',
			'Graphics',
			'Videos',
			// timers
		],
	},
	backend: {
		title: 'Backend',
		items: ['Node', 'GraphQL', 'MongoDB', 'Auth'],
	},
	mobile: {
		title: 'Mobile',
		items: ['React Native', 'Sharing Code', 'Notifications', 'Camera'],
	},
	ai: {
		title: 'Artificial Intelligence',
		items: [
			'Tensorflow',
			'Sentiment Analysis',
			'Chatbot',
			'Facial Recognition',
		],
	},
	projects: {
		title: 'Full Fledged Projects',
		items: ['Portfolio', 'Ecommerce', 'News', 'Social Media', 'Getting Hired'],
	},
};

export default contents;

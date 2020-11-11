const categories = {
	javascript: {
		title: 'JavaScript',
		description: 'Curated tutorials, emphasizing on ES6+ features',
		contents: [
			{
				title: 'Functions',
				description:
					'Encapsulating code with function declaration and function expression',
				path: '/functions',
			},
			{
				title: 'Loops',
				description:
					'Iterating over sequences by repetition or by traversing an iterable',
				path: '/loops',
			},
			{
				title: 'Generators',
				description:
					'Producing sequential items in steps and gaining performance',
				path: '/generators',
			},
			{
				title: 'Promises',
				description: 'Making async calls and avoiding callback hell',
				path: '/promises',
			},
			{
				title: 'Async Await',
				description: 'Syntatic sugar for Generator plus Promises',
				path: '/async-await',
			},
		],
	},
	react: {
		title: 'React',
		description:
			'Concepts from React, focusing on function components and React Hooks',
		contents: [
			{
				title: 'Rendering',
				description: 'Rendering on the browser with JXS',
				path: '/rendering',
			},
			{
				title: 'Styling',
				description: 'Creating a fully component oriented app with JSS',
				path: '/styling',
			},
			{
				title: 'State',
				description: 'State management and re-rendering components',
				path: '/state',
			},
			{
				title: 'Side Effects',
				description: 'Dealing with side effects on the component lifecycle',
				path: '/side-effects',
			},
			{
				title: 'Memoization',
				description: 'Improving performance by memoizing data and methods',
				path: '/memoization',
			},
			{
				title: 'Lazy Loading',
				description: "Loading only what's necessary",
				path: '/lazy-loading',
			},
			{
				title: 'Routing',
				description: 'Creating Single Page Apps with react-router',
				path: '/routing',
			},
			{
				title: 'Animations',
				description: 'Controlling animations with react-spring',
				path: '/animations',
			},
		],
	},
	node: {
		title: 'Node',
		description: 'Extending applications with Node.js and GraphQL',
		contents: [
			{
				title: 'GraphQL',
				description:
					'Modeling backend APIs with GraphQL and integrating with the frontend',
				path: 'graphql',
			},
			{
				title: 'MongoDB',
				description:
					'Persisting unstructured data using a Non-Relational Database',
				path: '/mongodb',
			},
			{
				title: 'Authentication',
				description: 'Authenticating users on the web with passport.js',
				path: '/auth-web',
			},
		],
	},
};

export default categories;
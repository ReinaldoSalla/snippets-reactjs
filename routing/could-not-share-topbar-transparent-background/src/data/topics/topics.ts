const topics = {
  javascript: {
    title: 'JavaScript',
    description: 'Curated tutorials from basic to advanced',
    contents: [
      { title: 'Data Structures', description: 'Understanting JavaScript data types and basic data processing', path: '/data-structures'},
      { title: 'Functions', description: 'Learning how to use function declarations, function expressions and arrow functions', path: '/functions'},
			{ title: 'Conditionals', description: 'Usings if-else, switch and the ternary operator', path: '/conditionals'},
			{ title: 'Loops', description: 'Iterating over sequences by repetition or by traversing an iterable', path: '/loops' },
			{ title: 'Map', description: 'Processing/Mutating each element of an array according to a certain pattern', path: '/map' },
			{ title: 'Filter', description: 'Removing elements of an array according to a certain pattern', path: '/filter'},
      { title: 'Reduce', description: 'Processing/Mutating each element of an array and generating an accumulator', path: '/reduce' },
      { title: 'Iterators', description: 'Dealing with sequences in the core language', path: '/iterators'},
      { title: 'Generators', description: 'Producing sequential items in steps and gaining performance', path: '/generators' },
      { title: 'Try Catch', description: 'Dealing with erros and exceptions in JavaScript', path: '/try-catch' },
      { title: 'Closures', description: 'Holding the environment', path: '/closures' },
      { title: 'Proxy Pattern', description: 'Intercepting an object', path: '/proxy' },
      { title: 'Callbacks', description: 'Fundamental concept from asyncronous programming in JavaScript', path: '/callbacks' },
			{ title: 'Promises', description: 'Making async calls and avoiding callback hell', path: '/promises'},
			{ title: 'Async Await', description: 'Syntatic sugar for Generator plus Promises', path: '/async-await'}
    ]
  },
  typescript: {
    title: 'TypeScript',
    description: 'Fundamentals for extending JavaScript',
    contents: [
			{ title: 'Types', description: 'Statically type check JavaScript code', path: '/types' },
			{ title: 'Interfaces', description: 'Creating a blueprint for data consisting of key-value pairs', path: '/interfaces' },
      { title: 'Generics', description: 'Allowing the usage of multiple types', path: '/generics' },
      { title: 'Decorators', description: 'Injecting extra functionality and metadata', path: '/decorators' },
    ]
  },
  react: {
    title: 'React',
    description: 'Concepts from React, focusing on function components and React Hooks',
    contents: [
      { title: 'Rendering', description: 'Rendering on the browser with JXS', path: '/rendering' },
      { title: 'Styling', description: 'Creating a fully component oriented app with JSS', path: '/styling' },
			{ title: 'State', description: 'State management and re-rendering components', path: '/state' },
			{ title: 'Props', description: 'Passing data from parent component to child component', path: '/props' },
      { title: 'Side Effects', description: 'Dealing with side effects on the component lifecycle', path: '/side-effects' },
      { title: 'Context', description: 'Creating global variables and methods', path: '/context' },
      { title: 'Refs', description: 'An escape hatch from react state management', path: '/refs' },
      { title: 'Memoization', description: 'Improving performance by memoizing data and methods', path: '/memoization' },
      { title: 'Lazy Loading', description: 'Loading only what\'s necessary', path: '/lazy-loading' },
      { title: 'Routing', description: 'Creating Single Page Apps with react-router', path: '/routing' },
      { title: 'Plots', description: 'Creating plots in react with ???', path: 'plots' },
      { title: 'Animations', description: 'Controlling animations with react-spring', path: '/animations' },
      { title: 'Graphics', description: 'Usage of 3D graphics with three.js and react-three-fiber', path: '/graphics' },
      { title: 'Videos', description: 'Manipulating videos in react with ???', path: '/videos' },
      { title: 'Gatsby', description: 'Framework based on React', path: '/gatsby' }
    ]
  },
  backend: {
    title: 'Backend',
    description: 'Extending applications with Node.js and GraphQL',
    contents: [
      { title: 'Node.js', description: 'Executing server side JavaScript and integrating with the frontend', path: '/node'},
      { title: 'GraphQL', description: 'Modeling backend APIs with GraphQL and integrating with the frontend', path: 'graphql' },
      { title: 'MongoDB', description: 'Persisting unstructured data using a Non-Relational Database', path: '/mongodb' },
      { title: 'Authentication for the web', description: 'Authenticating users on the web with passport.js', path: '/auth-web' },
      { title: 'Authetication for mobile', description: 'Authenticating users in mobile apps', path: '/auth-mobile'},
      { title: 'Scheduling', description: 'Scheduling activities throught the backend', path: '/scheduling' }
    ]
  },
  // mobile: {
  //   title: 'Mobile',
  //   description: 'Creating native apps for Android and IOS',
  //   contents: [
  //     { title: 'React Native', description: 'React Native crash course', path: '/react-native' },
  //     { title: 'Sharing Styles', description: 'Sharing styling code between React and React Native', path: '/sharing-styles' },
  //     { title: 'Sharing Animations', description: 'Sharing animations between React and React Native', path: '/sharing-animations' },
  //     { title: 'Push Notifications', description: 'Interating with the user even when the app is hybernating', path: '/push-notifications' },
  //     { title: 'Microfone', description: 'Controlling the smarthphone built-in microfone', path: '/microfone'},
  //     { title: 'Camera', description: 'Controlling the smartphone built-in camera', path: '/camera' }
  //   ],
  // },
	// ai: {
  //   title: "Artificial Intelligence",
  //   description: 'Tackling the big trend in AI today - Deep Learning',
	// 	contents: [
  //     { title: 'Tensorflow.js', description: 'Dynamic data computation for deep learning', path: '/tensorflow' },
  //     { title: 'Machine translation', description: 'Translation with xxx', path: '/machine-learning'},
  //     { title: 'Forecasting', description: 'Predicting the future with xxx', path: '/forecasting'},
	// 		{ title: 'Sentiment Analysis', description: 'Getting the meaning and the emotion from text sentences', path: '/sentiment-analysis' },
	// 		{ title: 'Chatbot', description: 'Using the ??? API', path: '/chatbot' },
  //     { title: 'Facial Recognition', description: 'Using the ??? API', path: '/facial-recognition' },
	// 	]
	// }
};

export default topics

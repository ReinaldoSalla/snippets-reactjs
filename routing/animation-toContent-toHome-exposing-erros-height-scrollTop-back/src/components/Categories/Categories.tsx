import React, { Fragment } from 'react';
import {
  CategoriesContainer,
  CategoriesItemContainer,
  CategoriesHeaderContainer,
  CategoriesTitleText,
  CategoriesDescriptionText,
  CategoriesContentsContainer,
  CategoriesContentContainer,
  CategoriesContentLink,
  CategoriesContentTitleText,
  CategoriesContentDescriptionText
} from './Categories.styles';
import {
  JavaScriptRoundedIcon,
  ShieldEchoesRoundedIcon,
  ReactRoundedIcon,
  BackendRoundedIcon,
  MobileRoundedIcon,
  AiRoundedIcon
} from '../RoundedIcon';
import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import {
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import routes from '../../routes';

const topics = {
  javascript: {
    title: 'JavaScript',
    description: 'Curated tutorials from basic to advanced',
    contents: [
      { title: 'Data Structures', description: 'Understanting JavaScript data types and basic data processing', path: '/data-structures'},
      { title: 'Functions', description: 'Learning how to use function declarations, function expressions and arrow functions', path: '/functions'},
			{ title: 'Conditionals', description: 'Usings if-else, switch and the ternary operator', path: '/conditionals'},
			{ title: 'Loops', description: 'Iterating over sequences by repetition or by traversing an iterable', path: '/loops' },
			// { title: 'Map', description: 'Processing/Mutating each element of an array according to a certain pattern' },
			// { title: 'Filter', description: 'Removing elements of an array according to a certain pattern'},
      // { title: 'Reduce', description: 'Processing/Mutating each element of an array and generating an accumulator'},
      // { title: 'Iterators', description: 'Dealing with sequences in the core language'},
      // { title: 'Generators', description: 'Producing sequential items in steps and gaining performance' },
      // { title: 'Try Catch', description: 'Dealing with erros and exceptions in JavaScript' },
      // { title: 'Closures', description: 'Holding the environment' },
      // { title: 'Proxy Pattern', description: 'Intercepting an object'},
      // { title: 'Callbacks', description: 'Fundamental concept from asyncronous programming in JavaScript' },
			// { title: 'Promises', description: 'Making async calls and avoiding callback hell'},
			// { title: 'Async Await', description: 'Syntatic sugar for Generator plus Promises'}
    ]
  },
  typescript: {
    title: 'TypeScript',
    description: 'Fundamentals for extending JavaScript',
    contents: [
			{ title: 'Types', description: 'Statically type check JavaScript code' },
			{ title: 'Interfaces', description: 'Creating a blueprint for data consisting of key-value pairs' },
      { title: 'Generics', description: 'Allowing the usage of multiple types' },
      { title: 'Decorators', description: 'Injecting extra functionality and metadata' },
    ]
  },
  react: {
    title: 'React',
    description: 'Concepts from React, focusing on function components and React Hooks',
    contents: [
      { title: 'Rendering', description: 'Rendering on the browser with JXS' },
      { title: 'Styling', description: 'Creating a fully component oriented app with JSS' },
			{ title: 'State', description: 'State management and re-rendering components' },
			{ title: 'Props', description: 'Passing data from parent component to child component' },
      { title: 'Side Effects', description: 'Dealing with side effects on the component lifecycle' },
      { title: 'Context', description: 'Creating global variables and methods' },
      { title: 'Refs', description: 'An escape hatch from react state management' },
      { title: 'Memoization', description: 'Improving performance by memoizing data and methods' },
      { title: 'Lazy Loading', description: 'Loading only what\'s necessary'},
      { title: 'Routing', description: 'Creating Single Page Apps with react-router' },
      { title: 'Plots', description: 'Creating plots in react with ???' },
      { title: 'Animations', description: 'Controlling animations with react-spring' },
      { title: 'Graphics', description: 'Usage of 3D graphics with three.js and react-three-fiber' },
      { title: 'Videos', description: 'Manipulating videos in react with ???' },
      { title: 'Gatsby', description: 'Framework based on React'}
    ]
  },
  mobile: {
    title: 'Mobile',
    description: 'Creating native apps for Android and IOS',
    contents: [
      { title: 'React Native', description: 'React Native crash course' },
      { title: 'Sharing Styles', description: 'Sharing styling code between React and React Native' },
      { title: 'Sharing Animations', description: 'Sharing animations between React and React Native' },
      { title: 'Push Notifications', description: 'Interating with the user even when the app is hybernating' },
      { title: 'Microfone', description: 'Controlling the smarthphone built-in microfone'},
      { title: 'Camera', description: 'Controlling the smartphone built-in camera' }
    ],
	},
  backend: {
    title: 'Backend',
    description: 'Extending applications with Node.js and GraphQL',
    contents: [
      { title: 'Node.js', description: 'Executing server side JavaScript and integrating with the frontend'},
      { title: 'GraphQL', description: 'Modeling backend APIs with GraphQL and integrating with the frontend' },
      { title: 'MongoDB', description: 'Persisting unstructured data using a Non-Relational Database' },
      { title: 'Authentication for the web', description: 'Authenticating users on the web with passport.js' },
      { title: 'Authetication for mobile', description: 'Authenticating users in mobile apps'},
      { title: 'Scheduling', description: 'Scheduling activities throught the backend'}
    ]
  },
	ai: {
    title: "Artificial Intelligence",
    description: 'Tackling the big trend in AI today - Deep Learning',
		contents: [
      { title: 'Tensorflow.js', description: 'Dynamic data computation for deep learning' },
      { title: 'Machine translation', description: 'Translation with xxx'},
      { title: 'Forecasting', description: 'Predicting the future with xxx'},
			{ title: 'Sentiment Analysis', description: 'Getting the meaning and the emotion from text sentences' },
			{ title: 'Chatbot', description: 'Using the ??? API' },
      { title: 'Facial Recognition', description: 'Using the ??? API' },
		]
	}
};

const CategoriesContent = ({ content }) => (
  <CategoriesContentLink to={content.path}>
    <CategoriesContentTitleText>
      {content.title}
    </CategoriesContentTitleText>
    <CategoriesContentDescriptionText>
      {content.description}
    </CategoriesContentDescriptionText>
  </CategoriesContentLink>
);

const CategoriesContents = ({
  contents
}) => (
  <CategoriesContentsContainer>
    {contents.map((content, index) => 
      <CategoriesContent key={index} content={content} /> 
    )}
  </CategoriesContentsContainer>
);

const CategoriesItem = ({
  Icon,
  title,
  description,
  contents,
  lastItem=false
}) => (
	<CategoriesItemContainer lastItem={lastItem}>
		<CategoriesHeaderContainer>
			<Icon />
      <CategoriesTitleText> 
        {title} 
      </CategoriesTitleText>
      <CategoriesDescriptionText> 
        {description} 
      </CategoriesDescriptionText>
		</CategoriesHeaderContainer>
    <CategoriesContents contents={contents} />
	</CategoriesItemContainer>
);

const Divs = () => {
  // a bunch of divs 
  return (
    <Fragment>
      {Array(100).fill(0).map((_, index) =>
        <div key={index}>
          content #{index + 1}
        </div>
      )}
    </Fragment>
  );
};

const Categories = () => {
  return (
    <Fragment>
      <Divs />
      <CategoriesContainer>
        <CategoriesItem  
          Icon={JavaScriptRoundedIcon}
          title={topics.javascript.title}
          description={topics.javascript.description}
          contents={topics.javascript.contents}
        />
        {/* <CategoriesItem  
          Icon={ShieldEchoesRoundedIcon}
          title={topics.typescript.title}
          description={topics.typescript.description}
          contents={topics.typescript.contents}
        />
        <CategoriesItem
          Icon={ReactRoundedIcon}
          title={topics.react.title}
          description={topics.react.description}
          contents={topics.react.contents}
        />
        <CategoriesItem 
          Icon={MobileRoundedIcon}
          title={topics.mobile.title}
          description={topics.mobile.description}
          contents={topics.mobile.contents}
        />
        <CategoriesItem 
          Icon={BackendRoundedIcon}
          title={topics.backend.title}
          description={topics.backend.description}
          contents={topics.backend.contents}
        />
        <CategoriesItem 
          Icon={AiRoundedIcon}
          title={topics.ai.title}
          description={topics.ai.description}
          contents={topics.ai.contents}
          lastItem={true}
        /> */}
      </CategoriesContainer>
    </Fragment>
  );
};

export default Categories;

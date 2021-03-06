import React, {
	useCallback,
	useEffect,
	useReducer,
	useState,
	Fragment,
} from 'react';
import {
	CouroselContainer,
	CouroselTitle,
	CouroselSubtitle,
  CouroselContent,
  CouroselContentText,
  CouroselContentFiller,
  CouroselContentWrapper,
	CouroselContentContainer,
	CouroselInputsWrapper,
	CouroselInputsContainer,
	CouroselInputsRow,
	CouroselInput,
	CouroselInputText,
	CouroselInputInner,
	CouroselTimerRow,
	CouroselTimer,
} from './Courosel.styles';
import { useTransition, useSpring } from 'react-spring';
import useDocumentVisibility from '../../utils/useDocumentVisibility';
import useHeight from '../../utils/useHeight';

const duration: number = 15e3;

const customConfig = {
	content: { mass: 5, tension: 50, friction: 26, clamp: true },
	input: { duration: 2000 },
};

const titleGenerator = (name: string): string => `${name} Guides`;

const contentGenerator = (name: string): string => `Check ${name} Tutorials`;

const texts = [
	{
		name: 'javascript',
		title: titleGenerator('JavaScript'),
		subtitle: 'From data processing to asyncronous programming',
		content: contentGenerator('JavaScript'),
	},
	{
		name: 'typescript',
		title: titleGenerator('TypeScript'),
		subtitle: 'Covering types, interfaces, generics and decorators',
		content: contentGenerator('TypeScript'),
	},
	{
		name: 'react',
		title: titleGenerator('React'),
		subtitle: 'Concepts from the core library and from third party libraries',
		content: contentGenerator('React'),
	},
	{
		name: 'graphql',
		title: titleGenerator('GraphQL'),
		subtitle:
			'Modern APIs with GraphQL, plus integration with databases and authentication systems',
		content: contentGenerator('GraphQL'),
	},
];

const CouroselItem = ({
  style,
  height,
	name,
	title,
	subtitle,
	content,
	handleClick,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const springProps = useSpring({
    textShadow: isHovering 
      ? '1px 1px 2px white, 0 0 1em white, 0 0 0.2em white' 
      : '0px 0px 0px white, 0 0 0em white, 0 0 0em   white'
  });

  const springInnerProps = useSpring({
    opacity: isHovering ? 0.8 : 0,
    width: isHovering ? '15rem' : '0rem'
  });

	return (
		<CouroselContentWrapper>
			<CouroselContentContainer style={style} height={`${height - 80 - 100}px`}>
				<CouroselTitle
          name={name}
          onClick={handleClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          style={springProps}
        >
          {title}
        </CouroselTitle>
				<CouroselSubtitle
          name={name}
          onClick={handleClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          style={springProps}
        >
          {subtitle}
        </CouroselSubtitle>
        <CouroselContent 
          name={name} 
          onClick={handleClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          style={springProps}
        >
          <CouroselContentText name={name} >
            {content}
          </CouroselContentText>
          <CouroselContentFiller name={name} style={springInnerProps} />
				</CouroselContent>
			</CouroselContentContainer>
		</CouroselContentWrapper>
	);
};

const couroselItems = texts.map(({ name, title, subtitle, content }) => {
	return ({ style, height, handleClick }) => (
		<CouroselItem
      style={style}
      height={height}
			name={name}
			title={title}
			subtitle={subtitle}
			content={content}
			handleClick={handleClick}
		/>
	);
});

const moveToNextItem = (state) => {
	let newIndex = state.index + 1;
	if (newIndex === couroselItems.length) newIndex = 0;
	return {
		index: newIndex,
		isTimerEnabled: true,
	};
};

const moveToFirstItem = () => {
	return {
		index: 0,
		isTimerEnabled: false,
	};
};

const moveToSecondItem = () => {
	return {
		index: 1,
		isTimerEnabled: false,
	};
};

const moveToThirdItem = () => {
	return {
		index: 2,
		isTimerEnabled: false,
	};
};

const moveToForthItem = () => {
	return {
		index: 3,
		isTimerEnabled: false,
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'MOVE_TO_NEXT_ITEM':
			return moveToNextItem(state);
		case 'MOVE_TO_FIRST_ITEM':
			return moveToFirstItem();
		case 'MOVE_TO_SECOND_ITEM':
			return moveToSecondItem();
		case 'MOVE_TO_THIRD_ITEM':
			return moveToThirdItem();
		case 'MOVE_TO_FORTH_ITEM':
			return moveToForthItem();
		default:
			throw new ReferenceError(`Action type ${action.type} is not declared`);
	}
};

const transitionProps: any = {
	config: customConfig.content,
	trail: 1000,
	from: {
		opacity: 0,
		transform: 'scale(0.1)',
	},
	enter: {
		opacity: 1,
		transform: 'scale(1)',
	},
	leave: {
		opacity: 0,
		transform: 'scale(2)',
	},
};

const getTextProps = (currentIndex: number, targetIndex: number): any => ({
	config: customConfig.input,
	color: currentIndex === targetIndex ? 'black' : 'white',
});

const getInnerProps = (currentIndex: number, targetIndex: number): any => ({
	config: customConfig.input,
	background: currentIndex === targetIndex ? 'white' : 'rgba(0, 0, 0, 0)',
	width: currentIndex === targetIndex ? '100%' : '0%',
});

const Courosel = ({ handleClick }) => {
	const [state, dispatch] = useReducer(reducer, {
		index: 0,
		isTimerEnabled: true,
	});
	const isDocumentVisible: boolean = useDocumentVisibility();
	const height = useHeight();

	const handleNextItem = useCallback(
		() => dispatch({ type: 'MOVE_TO_NEXT_ITEM' }),
		[]
	);

	const handleFirstItem = useCallback(
		() => dispatch({ type: 'MOVE_TO_FIRST_ITEM' }),
		[]
	);

	const handleSecondItem = useCallback(
		() => dispatch({ type: 'MOVE_TO_SECOND_ITEM' }),
		[]
	);

	const handleThirdItem = useCallback(
		() => dispatch({ type: 'MOVE_TO_THIRD_ITEM' }),
		[]
	);

	const handleForthItem = useCallback(
		() => dispatch({ type: 'MOVE_TO_FORTH_ITEM' }),
		[]
	);

	useEffect(() => {
		if (isDocumentVisible) {
			const intervalId = setInterval(() => {
				handleNextItem();
			}, duration);
			return () => clearInterval(intervalId);
		}
	});

	const transition = useTransition(state.index, null, {
		...transitionProps,
		order: ['leave', 'enter', 'update'],
	});

	const firstTextAnimation = useSpring(getTextProps(state.index, 0));

	const secondTextAnimation = useSpring(getTextProps(state.index, 1));

	const thirdTextAnimation = useSpring(getTextProps(state.index, 2));

	const forthTextAnimation = useSpring(getTextProps(state.index, 3));

	const firstInnerAnimation = useSpring(getInnerProps(state.index, 0));

	const secondInnerAnimation = useSpring(getInnerProps(state.index, 1));

	const thirdInnerAnimation = useSpring(getInnerProps(state.index, 2));

	const forthInnerAnimation = useSpring(getInnerProps(state.index, 3));

	const { width, opacity }: any = useSpring({
		config: { duration: duration + 100 },
		from: { width: 0, opacity: 0 },
		to: { width: 95, opacity: 1 },
		reset: true,
	});

	return (
		<Fragment>
			<CouroselContainer height={`${height}px`}>
				{transition.map(({ item, props, key }) => {
					const Page = couroselItems[item];
					return (
            <Page 
              key={key} 
              style={props} 
              height={height}
              handleClick={handleClick} 
            />
          );
				})}
				<CouroselInputsWrapper paddingTop={`${height - 80 - 10}px`}>
					<CouroselInputsContainer>
						<CouroselInputsRow>
							<CouroselInput onClick={handleFirstItem}>
								<CouroselInputText style={firstTextAnimation}>
									JavaScript
								</CouroselInputText>
								<CouroselInputInner style={firstInnerAnimation} />
							</CouroselInput>
							<CouroselInput onClick={handleSecondItem}>
								<CouroselInputText style={secondTextAnimation}>
									TypeScript
								</CouroselInputText>
								<CouroselInputInner style={secondInnerAnimation} />
							</CouroselInput>
							<CouroselInput onClick={handleThirdItem}>
								<CouroselInputText style={thirdTextAnimation}>
									React
								</CouroselInputText>
								<CouroselInputInner style={thirdInnerAnimation} />
							</CouroselInput>
							<CouroselInput onClick={handleForthItem}>
								<CouroselInputText style={forthTextAnimation}>
									GraphQL
								</CouroselInputText>
								<CouroselInputInner style={forthInnerAnimation} />
							</CouroselInput>
						</CouroselInputsRow>
						<CouroselTimerRow>
							<CouroselTimer
								style={{
									width: width.interpolate((width) =>
										width < 16 ? 0 : `${width}%`
									),
									opacity: opacity.interpolate((opacity) =>
										opacity < 0.16 ? 0 : opacity - 0.16
									),
								}}
							/>
						</CouroselTimerRow>
					</CouroselInputsContainer>
				</CouroselInputsWrapper>
			</CouroselContainer>
		</Fragment>
	);
};

export default Courosel;

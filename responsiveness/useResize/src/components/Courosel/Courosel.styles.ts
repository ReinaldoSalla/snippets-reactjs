import styled from 'styled-components';
import { animated } from 'react-spring';
import {
	CouroselContainerProps,
	CouroselInputsWrapperProps,
} from './Courosel.types';

const CouroselContainer = styled.div<CouroselContainerProps>`
	height: ${(props) => props.height};
	width: 100%;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center center;
`;

const CouroselContentWrapper = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	overflow: hidden;
`;

interface CouroselContentContainerProps {
	height: string;
}

const CouroselContentContainer = styled(animated.section)<
	CouroselContentContainerProps
>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 60px;
	height: ${(props) => props.height};
	overflow: hidden;
`;

interface CouroselTextProps {
	name: string;
}

const CouroselTitle = styled(animated.h1)<CouroselTextProps>`
	margin: 0;
	padding: 0;
	color: white;
	font-size: 3rem;
	font-weight: 700;
	text-align: center;

	&:hover {
		cursor: pointer;
	}
`;

const CouroselSubtitle = styled(animated.h2)<CouroselTextProps>`
	margin: 0 2rem;
	padding: 0;
	color: white;
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;

	&:hover {
		cursor: pointer;
	}
`;

const couroselContentHeight = '170px';

const CouroselContent = styled(animated.div)<CouroselTextProps>`
	display: flex;
	align-items: center;
	color: white;
	font-size: 2.5rem;
	border: 1px solid white;
	width: 15rem;
	font-weight: 700;
	border-radius: 20px;
	height: ${couroselContentHeight};

	&:hover {
		cursor: pointer;
	}
`;

const CouroselContentText = styled(animated.div)<CouroselTextProps>`
	padding: 0 8px 6px 8px;
	vertical-align: middle;
	text-align: center;
	font-size: 2.5rem;
	z-index: 2;
`;

const CouroselContentFiller = styled(animated.div)<CouroselTextProps>`
	position: absolute;
	height: 100%;
	background: #b0b0b0;
	border-radius: 20px;
	height: ${couroselContentHeight};
`;

const CouroselInputsWrapper = styled.div<CouroselInputsWrapperProps>`
	display: flex;
	justify-content: center;
	padding-top: ${(props) => props.paddingTop};
`;

const CouroselInputsContainer = styled.div`
	margin: 0 2rem;
	width: 1200px;
	display: flex;
	flex-direction: column;
`;

const CouroselInputsRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CouroselInput = styled.div`
	height: 30px;
	min-width: 100px;
	border-radius: 5px;
	border: 2px solid white;
	transition: transform 500ms;

	&:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
`;

const CouroselInputInner = styled(animated.div)`
	height: 100%;
`;

const CouroselInputText = styled(animated.span)`
	position: absolute;
	font-size: 20px;
	width: 100px;
	text-align: center;
`;

const CouroselTimerRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CouroselTimer = styled(animated.div)`
	padding: 14px;
	border-bottom: 3px solid white;
	width: auto;
`;

export {
	CouroselContainer,
	CouroselTitle,
	CouroselSubtitle,
	CouroselContent,
	CouroselContentFiller,
	CouroselContentText,
	CouroselContentContainer,
	CouroselContentWrapper,
	CouroselInputsWrapper,
	CouroselInputsRow,
	CouroselInputsContainer,
	CouroselInput,
	CouroselInputText,
	CouroselInputInner,
	CouroselTimerRow,
	CouroselTimer,
};

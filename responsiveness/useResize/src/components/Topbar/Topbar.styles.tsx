import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const TopbarContainer = styled(animated.nav)`
	top: 0px;
	height: 80px;
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	z-index: 2;
`;

const TopbarInnerWrapper = styled(animated.div)`
	background: #280808;
	width: 100%;
	position: fixed;
	z-index: 1;
`;

const TopbarItemCSS = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80px;
	width: 400px;
	/* border-right: 1px solid white; */ /* Border around the items */
	z-index: 2;

	&:hover {
		cursor: pointer;
	}
`;

const TopbarItemContainer = styled.button`
	${TopbarItemCSS}
`;

const TopbarLink = styled(Link)`
	${TopbarItemCSS}
`;

const TopbarText = styled.span`
	font-size: 1.25rem;
	color: white;
	z-index: 2;
	margin: 0;
	padding: 0;
	font-weight: 500;
`;

const TopbarFillerWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2.5rem;
	width: 2.5rem;
`;

const TopbarItemFiller = styled(animated.div)`
	position: fixed;
	height: 80px;
	width: 0%;
	background: #e01818;
	z-index: 1;
`;

export {
	TopbarContainer,
	TopbarInnerWrapper,
	TopbarItemContainer,
	TopbarLink,
	TopbarText,
	TopbarFillerWrapper,
	TopbarItemFiller,
};

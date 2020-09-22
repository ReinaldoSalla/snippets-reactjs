import styled from 'styled-components';
import { animated } from 'react-spring';
import {
	SidebarContainerProps,
	SidebarTitleContainerProps,
} from './Sidebar.interfaces';

const SidebarContainer = styled.aside<SidebarContainerProps>`
	background: #2d2a2a;
	width: 200px;
	height: ${(props) => props.height};
	padding: 1em;
	position: fixed;
	top: 70px;
	padding-bottom: 100px;
	margin-bottom: 100px;
	z-index: 4;
`;

const AnimatedSidebarContainer = animated(SidebarContainer);

const SidebarTextContainer = styled.div`
	color: white;
	font-size: 1.1em;
	padding: 0.2em 0 0.2em 0;
`;

const SidebarTitleContainer = styled.div<SidebarTitleContainerProps>`
	color: aqua;
	font-size: 1.3em;
	padding: ${(props) => (props.firstTitle ? '0 0 0.1em 0' : '1em 0 0.1em 0')};
`;

export {
	SidebarTextContainer,
	SidebarTitleContainer,
	AnimatedSidebarContainer,
};

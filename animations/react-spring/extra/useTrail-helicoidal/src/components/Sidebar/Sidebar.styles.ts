import styled from 'styled-components';
import { animated } from 'react-spring';
import { SidebarTitleContainerProps } from './Sidebar.interfaces';

const SidebarTextContainer = styled.div`
  color: white;
	font-size: 1.1em;
	padding: 0.2em 0 0.2em 0;
`;

const SidebarTitleContainer = styled.div<SidebarTitleContainerProps>`
  color: aqua;
  font-size: 1.3em;
	padding: ${props => props.firstTitle ? '0 0 0.1em 0' : '1em 0 0.1em 0'}
`;

const SidebarContainer = styled.div`
  /* background: rgba(14, 12, 12, 0.94); */
  background: gray;
  width: 200px;
	height: 600px;
  padding: 1em;
  position: fixed;
  top: 70px;
	padding-bottom: 100px;
	margin-bottom: 100px;
	overflow-y: scroll;
	scrollbar-width: thin;
`;

const AnimatedSidebarContainer = animated(SidebarContainer);

const AnimatedSidebarTextContainer = animated(SidebarTextContainer);

const AnimatedSidebarTitleContainer = animated(SidebarTitleContainer);

/*
export {
  AnimatedSidebarContainer,
  AnimatedSidebarTextContainer as SidebarTextContainer,
  AnimatedSidebarTitleContainer as SidebarTitleContainer
}
*/

export { 
  SidebarTextContainer,
  SidebarTitleContainer,
  AnimatedSidebarContainer
};
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';
import { LinkProps } from './ContentNavigation.types';

interface Unknown {
  [key: string]: any;
}

const ContentNavigationWrapper = styled.aside.attrs<Unknown>(props => {
  let position,
      top,
      right,
      bottom;
  if (!props.isSidebarVisible) {
    position = 'sticky';
    top = '100px';
    right = '60px';
    bottom = '';
  } else if (props.isSidebarVisible && props.isIntersecting) {
    position = 'absolute';
    top = props.top <= 100 ? props.top : `${props.top-121}px`;
    right = '11px';
    bottom = '';
  } else if (props.isSidebarVisible && !props.isIntersecting) {
    position = 'absolute';
    top = '';
    right = '11px';
    bottom = '0px';
  } 
  return {
    position,
    top,
    right,
    bottom
  };
})<Unknown>`
  position: ${(props) => props.position};
  z-index: 1;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  height: 300px;
  margin-top: 140px;
  margin-left: 72px;
  border: 1px solid transparent;

  ${(props) => props.theme.breakpoints.medium} {
    display: ${(props) => props.isSidebarVisible ? 'block' : 'none'};
    opacity: ${(props) => props.isSidebarVisible ? 0 : 1};
  }
`;

const ContentNavigationItem = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};

  &:hover {
    cursor: pointer;
  }
`;

const ContentNavigationCircle = styled(animated.div)`
  margin-top: 2px;
  margin-right: 8px;
  width: 8px;
  height: 8px;
  border: 1px solid black;
  border-radius: 50%;
  background: 50%;
`;

const ContentNavigationText = styled(animated.span)`
  display: inline-block;
  width: 100px;
  line-height: 0.7;
  transition: transform 250ms;

  &:hover {
    transform: translate3d(8px, 0, 0);
  }
`;

export {
  ContentNavigationWrapper,
  ContentNavigationItem,
  ContentNavigationCircle,
  ContentNavigationText,
};
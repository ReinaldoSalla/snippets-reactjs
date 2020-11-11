import styled from 'styled-components';
import { animated } from 'react-spring';
import { ContentWrapperProps } from './Content.types';

const ContentWrapper = styled(animated.div)<ContentWrapperProps>`
  padding: ${(props) => `${props.theme.topbarHeight} 48px 36px 48px`};
  background: ${(props) => props.theme.pageBgColor};

  ${(props) => props.theme.breakpoints.medium} {
    padding: ${(props) => `${props.theme.topbarHeight} 36px 36px 36px`}
  }

  ${(props) => props.theme.breakpoints.small} {
    padding: ${(props) => `${props.theme.topbarHeight} 24px 36px 24px`}
  }
`;

const ContentDivisible = styled.div<ContentWrapperProps>`
  @media only screen and (min-width: 769px) {
    margin-right: ${(props) => props.$isSidebarVisible ? '190px' : '0px'};
  }

  ${(props) => props.theme.breakpoints.medium} {
    margin-right: '0px';
  }
`;

const ContentTitle = styled.h1`
  font-size: 32px;
  padding-top: 24px;
  color: ${(props) => props.theme.textColor};
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid transparent;

  ${(props) => props.theme.breakpoints.medium} {
    flex-direction: column-reverse;
  }
`;

export {
  ContentWrapper,
  ContentDivisible,
  ContentTitle,
  ContentContainer
};


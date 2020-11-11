import styled from 'styled-components';
import { LinkProps } from './ContentCore.types';

const ContentCoreWrapper = styled.article`
  border: 1px solid transparent;
`;

const ContentCoreHeading = styled.h1`
  font-size: 2em;
  padding: 0.5em 0;
  color: white;
`;

const ContentCoreTitle = styled.h2`
  color: ${(props) => props.theme.textColor};
`;

const ContentCoreText = styled.p`
  line-height: 1.7;
  color: ${(props) => props.theme.textColor};
`;

const ContentCoreLink = styled.a<LinkProps>`
  font-weight: 600;
  color: red;
  transition: color 250ms;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};

  &:hover {
    color: orange;
  }
`;

const ContentCoreContainer = styled.ul`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: rgb(35, 38, 43);
  border-radius: 10px;
`;

const ContentCoreCommand = styled.li`
  display: inline-block;
  color: white;
  word-spacing: 2px;
  margin: 20px 20px 0 20px;
`;

const ContentCoreHighlight = styled.span`
  background: rgba(255, 0, 0, 0.1);
`;

export { 
  ContentCoreWrapper,
  ContentCoreHeading,
  ContentCoreTitle,
  ContentCoreText,
  ContentCoreLink,
  ContentCoreContainer,
  ContentCoreCommand,
  ContentCoreHighlight 
};
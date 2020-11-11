import styled from 'styled-components';
import { animated } from 'react-spring';

const SearchWrapper = styled(animated.aside)`
  position: fixed;
  /* top: 40px; */
  z-index: 1;
  width: 100%;
  height: 500px;
  background: ${(props) => props.theme.topbarBgColor};
`;

const SearchContainer = styled.div`
  /* position: absolute;
  flex-direction: column;
  width: calc(100% - 256px);
  height: 100%; */
`;

const SearchTitle = styled(animated.span)`
  display: inline-block;
  font-size: 32px;
  text-align: center;
  width: 100%;
  margin-top: 180px;
  color: white;
  /* border: 10px solid red; */
`;

const SearchInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled(animated.input)`
  height: 60px;
  width: calc(100% - 200px);
  margin-top: 48px;
  border-radius: 20px;
  font-size: 24px;
  padding: 0 16px;
`;

const SearchExit = styled(animated.div)`
  position: absolute;
  top: calc(100px);
  right: 32px;
  font-size: 48px;
  color: white;
  transition: color 250;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }
`;

export { 
  SearchWrapper, 
  SearchContainer,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchExit 
};
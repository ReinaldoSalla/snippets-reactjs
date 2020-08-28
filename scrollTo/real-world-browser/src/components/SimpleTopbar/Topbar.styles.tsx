import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopbarContainer = styled.div`
  background: black;
  top: 0px;
  height: 80px;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 3;
`;

const TopbarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 400px;
  /* border-right: 1px solid white; */ /* if it's in the top position dont't render the right lines, only render if the user is not in the top*/
  transition: background 500ms;
  
  &:hover {
    background: red;
    cursor: pointer;
  }
`;

const TopbarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 400px;
  /* border-right: 1px solid white; */ /* if it's in the top position dont't render the right lines, only render if the user is not in the top*/
  transition: background 500ms;
  &:hover {
    background: red;
    cursor: pointer;
  }
`;

const TopbarText = styled.span`
  font-size: 1.25rem;
  color: white;
`;

const TopbarFillerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
`;  
  
export { 
  TopbarContainer,
  TopbarItemContainer,
  TopbarLink,
  TopbarText,
  TopbarFillerWrapper
};
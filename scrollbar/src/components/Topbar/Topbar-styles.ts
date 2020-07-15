import styled from 'styled-components';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { animated } from 'react-spring';

const TopbarSvg = styled(animated(BsLayoutTextSidebar))`
  color: white;
  font-size: 2.5em;
  transition: color 1000ms;

  &:hover {
    color: aqua;
  }
`;

const TopbarListItem = styled.li`
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  align-items: center;
`;

const TopbarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid red;
`;

const TopbarNavigation = styled.nav`  
  margin: 0;
  padding: 0;
  background: gray;
  height: 70px;
  /* position: fixed; */
  /* z-index: 1; */
`;

export { 
  TopbarSvg,
  TopbarListItem,
  TopbarList,
  TopbarNavigation 
};
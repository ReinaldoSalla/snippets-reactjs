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
  color: white;
`;

const TopbarList = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const TopbarNavigation = styled.nav`  
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 70px;
  width: 100%;
  position: fixed; 
  transform: translateY(-20%);
  /* z-index: 1; */
`;

const AnimatedTopbarSvg = animated(TopbarSvg);

export { 
  TopbarSvg,
  TopbarListItem,
  TopbarList,
  TopbarNavigation 
};
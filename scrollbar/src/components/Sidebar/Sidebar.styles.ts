import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarNavigation = styled(animated.div)`
  background: red;
  width: 100px;
  /* height: 200px; */
  padding: 1em;
  position: absolute;
  /* transform: translateY(-100%); */
`;

export { SidebarNavigation };
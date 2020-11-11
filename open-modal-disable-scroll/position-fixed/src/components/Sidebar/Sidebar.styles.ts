import styled from 'styled-components';
import { animated } from 'react-spring';

const SidebarWrapper = styled(animated.aside)`
  position: fixed;
  top: ${(props) => props.theme.topbarHeight};
  left: 0;
  z-index: 3;
  width: 300px;
  height: calc(100% - 80px);
  background: ${(props) => props.theme.boxBgColor};
  overflow-y: auto;
  overflow-x: hidden;

  ${(props) => props.theme.breakpoints.small} {
    width: 100%;
  }
`;

export default SidebarWrapper;
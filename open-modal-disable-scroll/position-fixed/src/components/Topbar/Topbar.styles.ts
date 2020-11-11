import styled from 'styled-components';
import { animated } from 'react-spring';

const TopbarHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
`;

const TopbarNav = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.topbarHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TopbarFillerProps {
  isInTop?: boolean
}

const TopbarFiller = styled(animated.div)<TopbarFillerProps>`
  position: absolute;
  background: ${(props) => props.theme.topbarBgColor};
  width: 100%;
`;

export {
  TopbarHeader,
  TopbarNav,
  TopbarFiller
};

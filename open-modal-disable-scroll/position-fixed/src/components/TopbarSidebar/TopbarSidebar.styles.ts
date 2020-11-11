import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as SidebarSvg } from '../../assets/icons/contents.svg';

const TopbarSidebarWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    /* outline: 1px solid red;     */
    outline: none;
  }

  &:active {
    outline: none;
  }
`;

const TopbarSidebarNormalizer = styled.div`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
  width: 32px;
`;

const TopbarSidebarSvg = styled(animated(SidebarSvg))`
  width: 100%;
  height: 100%;
  color: white;
`;

const TopbarSidebarText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarSidebarFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarSidebarWrapper,
  TopbarSidebarNormalizer,
  TopbarSidebarSvg,
  TopbarSidebarText,
  TopbarSidebarFiller
};


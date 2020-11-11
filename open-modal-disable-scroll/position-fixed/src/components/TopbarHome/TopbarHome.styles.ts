import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { ReactComponent as JavascriptSvg } from '../../assets/icons/javascript.svg';

const TopbarHomeWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const TopbarHomeNormalizer = styled.div`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
`;

const TopbarHomeSvg = styled(animated(JavascriptSvg))`
  width: 40px;
  height: 40px;
  color: white;
  transform: translate(0%, -10%);
`;

const TopbarHomeText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarHomeFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarHomeWrapper,
  TopbarHomeNormalizer,
  TopbarHomeSvg,
  TopbarHomeText,
  TopbarHomeFiller
};


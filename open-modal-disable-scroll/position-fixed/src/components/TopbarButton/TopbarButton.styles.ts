import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

const TopbarButtonWrapper = styled(animated.div)`
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

const TopbarButtonNormalizer = styled.div`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
`;

interface TopbarButtonSvgProps {
  adjustSvg: boolean;
}

const TopbarButtonSvg = styled(animated.div)<TopbarButtonSvgProps>`
  width: ${(props) => props.adjustSvg ? '40px' : '32px'};
  height: ${(props) => props.adjustSvg ? '40px' : '32px'};
  color: white;
  transform: ${(props) => props.adjustSvg ? 'translate(0, -10%)' : 'translate(0, 0)'};
`;

const TopbarButtonText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarButtonFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarButtonWrapper,
  TopbarButtonNormalizer,
  TopbarButtonSvg,
  TopbarButtonText,
  TopbarButtonFiller
};


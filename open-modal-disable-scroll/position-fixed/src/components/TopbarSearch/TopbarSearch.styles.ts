import styled from 'styled-components';
import { animated } from 'react-spring';
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg';

const TopbarSearchWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  z-index: 4;
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

const TopbarSearchNormalizer = styled(animated.div)`
  z-index: 2;
  margin-bottom: 8px;
  height: 32px;
`;

const TopbarSearchSvg = styled(animated(SearchSvg))`
  width: 40px;
  height: 40px;
  transform: translate(0, -10%);
  color: white;
`;

const TopbarSearchText = styled.span`
  z-index: 2;
  font-size: 20px;
  line-height: 0.7em;
  color: white;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
  }
`;

const TopbarSearchFiller = styled(animated.div)`
  position: absolute;
  z-index: 1;
  height: 80px;
  background: var(--hover-color);
`;

export {
  TopbarSearchWrapper,
  TopbarSearchNormalizer,
  TopbarSearchSvg,
  TopbarSearchText,
  TopbarSearchFiller
};


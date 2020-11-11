import styled from 'styled-components';
import { animated } from 'react-spring';
import { CarouselInputWrapperProps } from './CarouselInput.types';

const CarouselInputWrapper = styled.div<CarouselInputWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  position: absolute;
  bottom: 10px;
  z-index: 0;
  pointer-events: ${({ $isSidebarVisible }) => $isSidebarVisible ? 'none' : 'auto'};
`;

const CarouselInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

const CarouselInputButton = styled.div`
  height: 30px;
  width: 100px;
  border: 1px solid white;
  border-radius: 5px;
  transition: transform 500ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  ${(props) => props.theme.breakpoints.small} {
    width: 80px;
    height: 24px;
  }
`;

const CarouselInputText = styled(animated.span)`
  position: absolute;
  font-size: 20px;
  width: 100px;
  text-align: center;
  z-index: 1;

  ${(props) => props.theme.breakpoints.small} {
    font-size: 16px;
    width: 80px;
  }
`;

const CarouselInputInner = styled(animated.div)`
  height: 100%;

  ${(props) => props.theme.breakpoints.small} {
    height: 24px;
  }
`

const CarouselInputTimer = styled.div<CarouselInputWrapperProps>`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20px;
  opacity: ${({ $isSidebarVisible }) => $isSidebarVisible ? 0 : 1};
`;

const CarouselInputRow = styled(animated.div)`
  height: 10px;
  border-top: 2px solid white;
`;

export {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  CarouselInputRow
};
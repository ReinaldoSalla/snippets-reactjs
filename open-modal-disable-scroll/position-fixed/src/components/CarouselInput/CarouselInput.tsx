import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  CarouselInputRow
} from './CarouselInput.styles';
import { 
  CarouselTimerAnimation, 
  CarouselTimerOffset,
  getTextProps,
  getInnerProps 
} from './CarouselInput.animations';
import { CarouselInputProps } from './CarouselInput.types';

const CarouselInput: FunctionComponent<CarouselInputProps> = ({
  index,
  handleFirstClick,
  handleSecondClick,
  handleThirdClick,
  isSidebarVisible,
}): JSX.Element => {
  const { width, opacity }: any = useSpring(CarouselTimerAnimation);

  const firstTextAnimation = useSpring(getTextProps(index, 0));

  const secondTextAnimation = useSpring(getTextProps(index, 1));

  const thirdTextAnimation = useSpring(getTextProps(index, 2));

  const firstInnerAnimation = useSpring(getInnerProps(index, 0));

  const secondInnerAnimation = useSpring(getInnerProps(index, 1));

  const thirdInnerAnimation = useSpring(getInnerProps(index, 2));

  return (
    <CarouselInputWrapper $isSidebarVisible={isSidebarVisible}>
      <CarouselInputArea>
        <CarouselInputButton onClick={handleFirstClick}>
          <CarouselInputText style={firstTextAnimation}>
            JavaScript
          </CarouselInputText>
          <CarouselInputInner style={firstInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleSecondClick}>
          <CarouselInputText style={secondTextAnimation}>
            React
          </CarouselInputText>
          <CarouselInputInner style={secondInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleThirdClick}>
          <CarouselInputText style={thirdTextAnimation}>
            Node
          </CarouselInputText>
          <CarouselInputInner style={thirdInnerAnimation} />
        </CarouselInputButton>
      </CarouselInputArea>
      <CarouselInputTimer $isSidebarVisible={isSidebarVisible}>
        <CarouselInputRow 
          style={{
            width: width.interpolate((width) => (
              width < CarouselTimerOffset ? 0 : `${width}%`
            )),
            opacity: opacity.interpolate((opacity) => (
              opacity < CarouselTimerOffset / 100 ? 0 : opacity - CarouselTimerOffset / 100
            ))
          }}
        />
      </CarouselInputTimer>
    </CarouselInputWrapper>
  );
};

export default CarouselInput;
import styled from 'styled-components';
import { WrapperProps, SvgProps } from './Icon.interfaces';
import { animated } from 'react-spring';

const Wrapper = styled(animated.div)<WrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border: ${(props) => props.border};
  z-index: ${props => props.zIndex};
	border-radius: 50%;
`;

const Svg = styled.div<SvgProps>`
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	color: ${(props) => props.color};
`;

export { Wrapper, Svg };

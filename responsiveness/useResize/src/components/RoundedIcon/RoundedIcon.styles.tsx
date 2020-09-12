import styled from 'styled-components';
import { IoLogoJavascript } from 'react-icons/io';
import { GiShieldEchoes, GiSmartphone } from 'react-icons/gi';
import { FaReact, FaRobot } from 'react-icons/fa';
import { BsServer, BsLayoutTextSidebar } from 'react-icons/bs';

import { animated } from 'react-spring';
import { CustomIconProps, IconContainerProps } from './RoundedIcon.interfaces';

const IconContainer = styled.div<IconContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin: ${(props) => props.margin};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	border: ${(props) => props.border};
	color: ${(props) => props.color};
`;

const BaseIcon = `
  margin: 10px;
  height: 2.5em;
  width: 2.5em;
`;

const SidebarIcon = styled(BsLayoutTextSidebar)`
	${BaseIcon}
`;

const AnimatedSidebarIcon = animated(SidebarIcon);

const JavaScriptIcon = styled(IoLogoJavascript)`
	${BaseIcon}
`;

const ReactIcon = styled(FaReact)`
	${BaseIcon}
`;

const BackendIcon = styled(BsServer)`
	${BaseIcon}
`;

const MobileIcon = styled(GiSmartphone)`
	${BaseIcon}
`;

const ShieldEchoesIcon = styled(GiShieldEchoes)<CustomIconProps>`
	${BaseIcon}
	transform: translate(
    ${(props) =>
		props.offsetX ? props.offsetX : '0'}, 
    ${(props) =>
		props.offsetY ? props.offsetY : '0'}
  )
`;

const AiIcon = styled(FaRobot)<CustomIconProps>`
	${BaseIcon}
	transform: translate(
    ${(props) =>
		props.offsetX ? props.offsetX : '0'}, 
    ${(props) =>
		props.offsetY ? props.offsetY : '0'}
  )
`;

export {
	IconContainer,
	JavaScriptIcon,
	ShieldEchoesIcon,
	ReactIcon,
	BackendIcon,
	MobileIcon,
	AiIcon,
	AnimatedSidebarIcon,
};

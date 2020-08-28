import React from 'react';
import {
  AnimatedSidebarIcon,
	IconContainer,
	JavaScriptIcon,
  ShieldEchoesIcon,
  ReactIcon,
  BackendIcon,
  MobileIcon,
  AiIcon,
} from './RoundedIcon.styles';

const BaseRoundedIcon = ({ 
    Icon,
    margin='1.25em 0 0.5em 0',
    height='3.5em',
    width='3.5m',
    border='1px solid black',
    color='black',
    offsetX='0%', 
    offsetY='0%' 
}) => (
  <IconContainer
    margin={margin}
    height={height}
    width={width}
    border={border}
    color={color}
  >
    <Icon offsetX={offsetX} offsetY={offsetY} />
  </IconContainer>
);

const AnimatedSidebarRoundedIcon = () => (
  <BaseRoundedIcon 
    Icon={AnimatedSidebarIcon}
    margin='0'
    height='3em'
    width='3em'
    border='1px solid white'
    color='white'
  />
);

const JavaScriptRoundedIcon = () => (
  <BaseRoundedIcon Icon={JavaScriptIcon} />
);

const ShieldEchoesRoundedIcon = () => (
  <BaseRoundedIcon Icon={ShieldEchoesIcon} offsetX='2%' offsetY='5%' />
);

const ReactRoundedIcon = () => (
  <BaseRoundedIcon Icon={ReactIcon} />
);

const BackendRoundedIcon = () => (
  <BaseRoundedIcon Icon={BackendIcon} />
);

const MobileRoundedIcon = () => (
  <BaseRoundedIcon Icon={MobileIcon} />
);

const AiRoundedIcon = () => (
  <BaseRoundedIcon Icon={AiIcon} offsetY='-1%' />
);

export {
  AnimatedSidebarRoundedIcon,
  JavaScriptRoundedIcon,
  ShieldEchoesRoundedIcon,
  ReactRoundedIcon,
  BackendRoundedIcon,
  MobileRoundedIcon,
  AiRoundedIcon
};
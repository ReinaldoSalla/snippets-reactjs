/*
Conclusions
1 - don't create a border-radius. Instead, create a wrapper around
2 - style straight into styled components, no need to use the provider
*/

import React from 'react';
import { IconContext } from 'react-icons';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { IoLogoJavascript } from 'react-icons/io';
import { FaUserSecret } from 'react-icons/fa';
import { GiShieldEchoes } from 'react-icons/gi';
import { ReactComponent as ArrowSvg } from '../../assets/icons/arrow.svg';
import { ReactComponent as BellSvg } from '../../assets/icons/bell.svg';
import { ReactComponent as SidebarTmpSvg } from '../../assets/icons/sidebar.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const BaseIcon = `
  // padding: 1rem;
  height: 64px;
  width: 64px;
  // border: 1px solid black;
  // border-radius: 50%;
`;

const SidebarIcon = styled(BsLayoutTextSidebar)`${BaseIcon}`;

const SidebarAlternateIcon = styled(BsLayoutTextSidebar)`
  ${BaseIcon}
  height: 50px;
  width: 50px;
`;

const SidebarTmpIcon = styled(SidebarTmpSvg)`${BaseIcon}`;

const JavaScriptIcon = styled(IoLogoJavascript)`${BaseIcon}`;

const ArrowIcon = styled(ArrowSvg)`${BaseIcon}`;

const BellIcon = styled(BellSvg)`${BaseIcon}`;

const ProfileIcon = styled(FaUserSecret)`${BaseIcon}`;

const ShieldIcon = styled(GiShieldEchoes)`${BaseIcon}`;

const IconTester = () => (
  <Wrapper>
    {/* <JavaScriptIcon /> */}
    {/* <IconContext.Provider
      value={{
        color: 'blue', size: '50px'
      }}
    >
      <BsLayoutTextSidebar />
    </IconContext.Provider> */}
    <SidebarAlternateIcon />
    {/* <SidebarTmpIcon />
    <SidebarIcon />
    <ProfileIcon />
    <ShieldIcon />
    <ArrowIcon />
    <BellIcon /> */}
  </Wrapper>
)

export default IconTester;
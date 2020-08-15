import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  TopbarContainer,
  TopbarItemContainer,
  TopbarLink,
  TopbarSidebarAnimatedIcon,
  TopbarSearchIcon,
  TopbarProfileIcon,
  TopbarText,
  TestIcon
} from './Topbar.styles';
import { useSpring } from 'react-spring';
import TopbarProps from './Topbar.interfaces';
import { Link } from 'react-router-dom';

const TopbarIcon: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}): JSX.Element => {
  const iconAnimation = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: async (next) => {
      await next({ transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)' })
    }
  });
  return (
    <TopbarItemContainer onClick={toggleSidebar}>
      <TopbarSidebarAnimatedIcon style={iconAnimation} /> 
      <TopbarText> Contents</TopbarText>
    </TopbarItemContainer>
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <TopbarContainer>
    <TopbarIcon
      isSidebarVisible={isSidebarVisible}
      toggleSidebar={toggleSidebar}
    />
    <TopbarLink to='/'>
      <TestIcon />
      <TopbarText> ABcdefgh</TopbarText>
    </TopbarLink>
    <TopbarItemContainer>
      <TopbarSearchIcon />
      <TopbarText> Search</TopbarText>
    </TopbarItemContainer>
    <TopbarItemContainer>
      <TopbarProfileIcon />
      <TopbarText> Profile </TopbarText>
    </TopbarItemContainer>
  </TopbarContainer>
);

export default Topbar;
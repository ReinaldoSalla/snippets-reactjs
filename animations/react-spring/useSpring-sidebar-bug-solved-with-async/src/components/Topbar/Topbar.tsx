import React, { 
  Fragment,
  FunctionComponent 
} from 'react';
import {
  AnimatedTopbarSvg, 
  TopbarListItem,
  TopbarList,
  TopbarNavigation
} from './Topbar-styles';
import { animated, useSpring, config } from 'react-spring';
import TopbarProps from './Topbar.interfaces';

// const TopbarItem: FunctionComponent = (): JSX.Element => (

// );

// const TopbarItems: FunctionComponent = (): JSX.Element => (
  
// );

const TopbarIcon: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  toggleSidebar,
}): JSX.Element => {
  const iconAnimation = useSpring({
    config: config.default,
    to: {transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)' }
  });
  return (
    <Fragment>
      <AnimatedTopbarSvg style={iconAnimation} onClick={toggleSidebar}/>
    </Fragment>
  );
};

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible, 
  toggleSidebar
}): JSX.Element => (
  <Fragment>
    <TopbarNavigation>
      <TopbarList>
        <TopbarListItem>
          <TopbarIcon 
            isSidebarVisible={isSidebarVisible} 
            toggleSidebar={toggleSidebar}
          />
        </TopbarListItem>
        <TopbarListItem>b</TopbarListItem>
        <TopbarListItem>c</TopbarListItem>
      </TopbarList>
    </TopbarNavigation>    
  </Fragment>
);

export default Topbar;
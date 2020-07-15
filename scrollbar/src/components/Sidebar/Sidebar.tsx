import React, { 
  FunctionComponent
 } from 'react';
import { SidebarNavigation } from './Sidebar.styles';
import SidebarProps from './Sidebar.interfaces';
import { useSpring } from 'react-spring';

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
  const sidebarAnimation = useSpring({
    marginLeft: isSidebarVisible ? '0px' : '-135px'
  });
  return (
    <SidebarNavigation style={sidebarAnimation}>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </SidebarNavigation>
  );
};

export default Sidebar;
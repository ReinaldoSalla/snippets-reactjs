import React, { FunctionComponent } from 'react';
import Exit from './SidebarExit.styles';

const SidebarExit = ({ 
  style, 
  toggleSidebar 
}): JSX.Element => (
  <Exit 
    style={style}
    onClick={toggleSidebar}
  >
    x
  </Exit>
);

export default SidebarExit;
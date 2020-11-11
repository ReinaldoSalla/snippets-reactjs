import React, { FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import { TopbarProps } from './Topbar.types';
import { getTopbarAnimation } from './Topbar.animations';
import TopbarSidebar from '../TopbarSidebar';
import TopbarHome from '../TopbarHome';
import TopbarSearch from '../TopbarSearch';
import useIsInTop from '../../hooks/useIsInTop';
import {
  TopbarHeader,
  TopbarNav,
  TopbarFiller
} from './Topbar.styles';

const Topbar: FunctionComponent<TopbarProps> = ({
  isSidebarVisible,
  isSearchVisible,
  toggleSidebar,
  toggleSearch
}): JSX.Element => {
  const isInTop = useIsInTop(50);

  const topbarFillerAnimation = useSpring(getTopbarAnimation(
    isInTop,
    isSidebarVisible
  ));

  return (
    <TopbarHeader>
      <TopbarNav>
        <TopbarHome />
        <TopbarSidebar 
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <TopbarSearch 
          isSearchVisible={isSearchVisible}
          toggleSearch={toggleSearch}
        />
        <TopbarFiller style={topbarFillerAnimation}/>
      </TopbarNav>
    </TopbarHeader>
  );
};

export default Topbar;
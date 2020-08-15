import React, { Fragment } from 'react';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const BaseLayout = ({ isSidebarVisible, toggleSidebar }) => (
  <Fragment>
    <Topbar
      isSidebarVisible={isSidebarVisible}
      toggleSidebar={toggleSidebar}
    />
    <Sidebar isSidebarVisible={isSidebarVisible} />                    
    <Footer />
  </Fragment>
);

export default BaseLayout;
import React from 'react';
import Content from '../../components/Content';

const ContentPage = ({ isSidebarVisible, topRef, closeSidebar }) => (
  <Content isSidebarVisible={isSidebarVisible} topRef={topRef} closeSidebar={closeSidebar} />
);

export default ContentPage;
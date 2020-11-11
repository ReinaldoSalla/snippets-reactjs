/*
Universal component rendered throughout the whole app.
*/

import React, { useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import Topbar from '../../components/Topbar';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/Search';
import HomePage from '../../pages/HomePage';
import ContentPage from '../../pages/ContentPage';
import Footer from '../../components/Footer';

const Universal = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSearchVisible, setisSearchVisible] = useState(false);
  const topRef: any = useRef();

  const toggleSidebar = () => {
    if (!isSidebarVisible) {
      topRef.current = document.documentElement.scrollTop;
      setIsSidebarVisible(true);
      document.body.style.overflowY = 'scroll';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${topRef.current}px`;
    } else {
      setIsSidebarVisible(false);
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'static';
      document.body.style.top = '';
      window.scrollTo({ top: topRef.current, left: 0 });
    }
  };

  const closeSidebar = () => {
    if (!isSidebarVisible) {
      topRef.current = document.documentElement.scrollTop;
    } else {
      setIsSidebarVisible(false);
      document.body.style.overflowY = 'auto';
      document.body.style.position = 'static';
      document.body.style.top = '';
      window.scrollTo({ top: topRef.current, left: 0 });      
    }
  };

  const toggleSearch = () => setisSearchVisible(!isSearchVisible);  

  return (
    <>
      <Topbar 
        isSidebarVisible={isSidebarVisible}
        isSearchVisible={isSearchVisible}
        toggleSidebar={toggleSidebar}
        toggleSearch={toggleSearch}
      />
      <Sidebar 
        isSidebarVisible={isSidebarVisible}
        toggleSidebar={toggleSidebar}
      />
      <Search
        isSearchVisible={isSearchVisible}
        toggleSearch={toggleSearch}
      />
      <Switch>
        <Route exact path='/'>
          <HomePage
            isSidebarVisible={isSidebarVisible} 
            closeSidebar={closeSidebar}
          />
        </Route>
        <Route path='/rendering'>
          <ContentPage 
            isSidebarVisible={isSidebarVisible} 
            closeSidebar={closeSidebar}
            topRef={topRef}   
          />
        </Route>
      </Switch>      
      <Footer 
        isSidebarVisible={isSidebarVisible} 
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default Universal;


//https://codesandbox.io/embed/xo0lrqw2nz

import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import styled from 'styled-components';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Courosel from '../Courosel';
import Categories from '../Categories';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import IconTester from '../IconTester';
import routes from '../../routes';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Switch, 
  useRouteMatch,
  useLocation
} from 'react-router-dom';

const BaseLayout = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  return (
    <Fragment>
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      {routes.map((route: any, index) => 
        <Route 
          key={index}
          path={route.path}
          render={props => 
            <route.component 
              {...props} 
              routes={route.routes} 
            />
          }
        />
      )}    
      <Categories />
      <Footer />
    </Fragment>
  )
};

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);


import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, useTransition, animated, config } from 'react-spring';
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

const toContent: any = {
  config: { tension: 120, friction: 26 },
  trail: 500,
  leave: {
    opacity: 0,
    transform: 'translateX(20%) scale3d(1, 1, 1)',
  },
  from: {
    opacity: 0,
    transform: 'translateX(0%) scale3d(0.5, 0.5, 0.5)',
    position: 'absolute',
  },
  enter: {
    opacity: 1,
    transform: 'translateX(0%) scale3d(1, 1, 1)',
  },
};

const toHome: any = {
  config: { tension: 120, friction: 26 },
  trail: 500,
  leave: {
    opacity: 0,
    transform: 'translateX(0%) scale3d(0.5, 0.5, 0.5)',
  },
  from: {
    opacity: 0,
    transform: 'translateX(-20%) scale3d(1, 1, 1)',
    position: 'absolute',
  },
  enter: {
    opacity: 1,
    transform: 'translateX(0%) scale3d(1, 1, 1)',
  },
  onDestroyed: () => window.scroll({ top: 0, left: 0, behavior: 'smooth' })
};

const BlockingWrapper = styled.div`
  overflow-x: hidden;
`;

const AnimatedBlockingWrapper = animated(BlockingWrapper);

// with animation
const Home: any = () => {
  const location = useLocation();
  const animationProps = location.pathname === '/' 
    ? toContent 
    : toHome;
  
  const transitions = useTransition(
    location, 
    location => location.pathname, 
    { 
      ...animationProps,
      order: ['leave', 'enter', 'update'] 
    }        
  );

  return transitions.map(({ item: pathname, props, key }) => (
    <AnimatedBlockingWrapper key={key} style={props}>
      <Switch location={pathname}>
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
      </Switch>
    </AnimatedBlockingWrapper>
  ))
};

// without animation
// const Home: any = () => (
//   <Fragment>
//     {routes.map((route: any, index) => 
//       <Route 
//         key={index}
//         path={route.path}
//         render={props => 
//           <route.component 
//             {...props} 
//             routes={route.routes} 
//           />
//         }
//       />
//     )}            
//   </Fragment>
// );

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
      <Route path='/'>
        <Home />
      </Route>
    </Fragment>
  )
};

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);
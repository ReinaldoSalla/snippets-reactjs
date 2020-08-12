import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import { useTransition, animated, config, UseTransitionProps } from 'react-spring';
import styled from 'styled-components';
import { inspect } from '../../utils/inspect';

const Wrapper = styled.div`
  padding: 2em;
  margin: 2em;
  width: 3em;
  border: 1px solid black;
  transition: transform 500ms;
  display: flex;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const transitionProps: any = {
  trail: 250,
  from: { opacity: 0, transform: 'translateX(-20%)', position: 'absolute' },
  enter: { opacity: 1, transform: 'translateX(0%)' },
  leave: { opacity: 0, transform: 'translateX(50%)' },   
}

const RoutesParser = (route) => {
  // inspect({ route });
  return (
    <Route 
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
};

const HomePage: any = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  const transitions = useTransition(
    location, 
    location => location.pathname, 
    { ...transitionProps, order: ['leave', 'enter', 'update'] }        
  );
  return transitions.map(({ item: pathname, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={pathname}>
        <Route path={path} exact>
          <Link to='/javascript'>
            <Wrapper>
              JavaScriptPage
            </Wrapper>
          </Link>
          <Link to='/react'>
            <Wrapper>
              React
            </Wrapper>
          </Link>
        </Route>

        {/* basic */}
        <Route path='/javascript'>
          <JavaScriptPage />
        </Route>
        <Route path='/react'>
          <ReactPage />
        </Route> 

        {/* config */ }
        {/* {routes.map((route, index) => 
          <RoutesParser key={index} {...route} />
        )}         */}

      </Switch>
    </animated.div>
  ))
}

const JavaScriptPage = () => (
  <h1>JavaScript</h1>
);

const ReactPage = () => (
  <h1>react</h1>
);

const BaseLayout = () => (
  <Fragment>
    <Link to='/'>
      home
    </Link>
    <Route path='/'>
      <HomePage />
    </Route>
  </Fragment>
);

const routes = [
  {
    path: '/javascript',
    component: JavaScriptPage
  },
  {
    path: '/react',
    component: React
  },
  {
    path: '/',
    component: HomePage
  },
]

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);

export default App;
import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';
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

const HomePage = () => {
  const { path } = useRouteMatch();
  const location = useLocation();
  let transition = useTransition(location, location => location.pathname, {
    // config: { duration: 1500 },
    trail: 250,
    from: { opacity: 0, transform: 'translateX(-20%)', position: 'absolute' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(50%)' },   
    order: ['leave', 'enter', 'update']
  });
  return transition.map(({ item: pathname, props, key }) => (
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
        <Route path='/javascript'>
          <JavaScriptPage />
        </Route>
        <Route path='/react'>
          <ReactPage />
        </Route> 
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
)

const App = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
);

export default App;
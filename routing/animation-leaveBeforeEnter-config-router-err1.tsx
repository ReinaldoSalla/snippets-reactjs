import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
  useRouteMatch
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import { inspect } from '../../utils/inspect';

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

const transitionProps: any = {
  trail: 250,
  from: {
    opacity: 0,
    transform: 'translateX(-20%)',
    position: 'absolute'
  },
  enter: {
    opacity: 1, 
    transform: 'translateX(0%)'
  },
  leave: {
    opacity: 0,
    transform: 'translateX(50%)'
  }
};

const HomePage = ({ routes }) => {
  return (
    <Fragment>
      <h1> home </h1>
      <Link to='/more-info'>more info</Link> <br />
      <Link to='/about'>about</Link>
      <Switch>
        {routes.map((route, index) => 
          <RoutesParser key={index} {...route} />
        )}
      </Switch>
    </Fragment>
  );
};

const MoreInfo = () => (
  <h1>more info</h1>
);

const About = () => (
  <h1>about</h1>
);

const JavaScriptPage: any = ({ routes }) => {
  // inspect({ routes });
  const { path } = useRouteMatch();
  const location = useLocation();
  const transition = useTransition(
    location,
    location => location.pathname,
    {
      ...transitionProps, 
      order: ['leave', 'enter', 'update']
    }
  )
  return transition.map(({ item: pathname, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={pathname}>
        <Route path={path} exact>          
          <h1>javascript</h1>
          <Link to='/promises'>promises</Link>
        </Route>
        {/* with config */}
        {/* {routes.map((route, index) => 
          <RoutesParser key={index} {...route} />
        )} */}
        {/* basic */}
        <Route path='/promises'>
          <PromisesPage />
        </Route>
      </Switch>
    </animated.div>
  ));
};

const PromisesPage = () => (
  <h1>Pomises</h1>
);


const ReactJSPage = ({ routes }) => {
  return (
  <Fragment>
    <h1>react</h1>
    <Link to='/reactjs/infinite-pagination'>infinite pagination</Link> <br />
    <Link to='/reactjs/paralex'>paralex</Link> <br />
    <Link to='/typescript'>typescript</Link>
    <Switch>
      {routes.map((route, index) => 
        <RoutesParser key={index} {...route} />
      )}
    </Switch>
  </Fragment>
  );
};

const InfinitePaginationPage = () => (
  <h1>infinite pagination</h1>
);

const ParalexPage = () => (
  <h1>paralex</h1>
);

const TypeScriptPage = () => (
  <h1>typescript</h1>
);

const routes = [
  {
    path: '/javascript',
    component: JavaScriptPage,
    routes: []
  },
  {
    path: '/promises',
    component: PromisesPage
  },
  {
    path: '/reactjs',
    component: ReactJSPage,
    routes: [
      {
        path: '/reactjs/infinite-pagination',
        component: InfinitePaginationPage
      },
      {
        path: '/reactjs/paralex',
        component: ParalexPage
      }
    ]
  },
  {
    path: '/typescript',
    component: TypeScriptPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    component: HomePage,
    routes: [
      {
        path: '/more-info',
        component: MoreInfo
      }
    ]
  },
];

const BaseLayout = () => (
  <BrowserRouter>
    <div>
      <Link to='/'> home </Link> <br />
      <Link to='/javascript'>javascript</Link> <br />
      <Link to='/reactjs'>react</Link>
    </div>
    <Switch>
      {routes.map((route, index) =>
        <RoutesParser key={index} {...route} />
      )}
    </Switch>
  </BrowserRouter>
);

export default BaseLayout;

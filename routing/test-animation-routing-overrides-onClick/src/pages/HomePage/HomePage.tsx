import React from 'react';
import Courosel from '../../components/Courosel';
import Categories from '../../components/Categories';
import routes from '../../routes';
import {Route} from 'react-router-dom';

const HomePage = () => (
  <>
    <Route path='/' exact>
      <Courosel />
      <Categories />
    </Route>
    {/* <Route path={routes.dataStructures.path}>
      <routes.dataStructures.page />
    </Route>
    <Route path={routes.functions.path}>
      <routes.functions.page />
    </Route>
    <Route path={routes.conditionals.path}>
      <routes.conditionals.page />
    </Route> 
    <Route path={routes.loops.path}>
      <routes.loops.page />
    </Route> */}
  </>
);

export default HomePage;

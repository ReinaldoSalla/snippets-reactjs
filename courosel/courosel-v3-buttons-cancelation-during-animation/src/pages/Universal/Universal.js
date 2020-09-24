/*
Universal component rendered throughout the whole app.
*/

import React from 'react';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import RouteParser from '../../routes/RouteParser';
import routesConfig from '../../routes/routes-config';

const Universal = () => {
  return (
    <>
      <Topbar />
      <main>
        {routesConfig.map((route, index) => (
          <RouteParser key={index} {...route} />
        ))}
      </main>
      {new Array(100).fill(0).map((_, index) => (
        <div key={index}>
          content #{index+1}
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Universal;


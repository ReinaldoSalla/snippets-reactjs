import React from 'react';
import Home from '../../pages/HomePage';
import Content from '../../pages/ContentPage';

const routesConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/rendering',
    component: Content
  }
];

export default routesConfig;
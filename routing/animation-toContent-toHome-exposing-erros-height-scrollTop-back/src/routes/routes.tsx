import React from 'react';
import HomePage from '../pages/HomePage';
import BaseContentPage from '../pages/BaseContentPage';
import BaseFooterPage from '../pages/BaseFooterPage';

const routes = [
  {
    path: '/data-structures',
    component: BaseContentPage
  },
  {
    path: '/functions',
    component: BaseContentPage
  },
  {
    path: '/conditionals',
    component: BaseContentPage
  },
  {
    path: '/loops',
    component: BaseContentPage
  },
  {
    path: '/legal',
    component: BaseFooterPage
  },
  {
    path: '/philosophy',
    component: BaseFooterPage
  },
  {
    path: '/contact',
    component: BaseFooterPage
  },
  {
    path: '/',
    component: HomePage
  }
]

// const routes = {
//   home: {
//     path: '/',
//     page: HomePage
//   },
//   dataStructures: {
//     path: '/data-structures',
//     page: BaseContentPage
//   },
//   functions: {
//     path: '/functions',
//     page: BaseContentPage
//   },
//   conditionals: {
//     path: '/conditionals',
//     page: BaseContentPage
//   },
//   loops: {
//     path: '/loops',
//     page: BaseContentPage
//   },
//   legal: {
//     path: '/legal',
//     page: BaseFooterPage
//   },
//   philosophy: {
//     path: '/philosophy',
//     page: BaseFooterPage
//   },
//   contact: {
//     path: '/contact',
//     page: BaseFooterPage
//   }
// }

export default routes;
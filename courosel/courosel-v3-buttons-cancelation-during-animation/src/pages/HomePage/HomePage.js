import React from 'react';
import { Route } from 'react-router-dom';
import VideoBackground from '../../components/VideoBackground';
import Courosel from '../../components/Courosel';

const HomePage = () => (
  <Route path='/' exact>
    <VideoBackground />
    <Courosel />
  </Route>
);

export default HomePage;
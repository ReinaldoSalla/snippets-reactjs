import React from 'react';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Universal />
  </BrowserRouter>
);

export default App;
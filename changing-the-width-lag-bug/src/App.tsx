import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './App.styles';
import Universal from './pages/Universal';

const App = () => (
	<BrowserRouter>
		<GlobalStyle />
		<Universal />
	</BrowserRouter>
);

export default App;
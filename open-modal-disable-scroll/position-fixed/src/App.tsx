import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, globalTheme } from './App.styles';
import Universal from './pages/Universal';
import 'fontsource-source-sans-pro';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle />
        <Universal />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// import React from 'react';
// import styled from 'styled-components';

// interface WrapperProps {
//   isSidebarVisible: boolean;
// }

// const Wrapper = styled.div<WrapperProps>`
//   width: 250px;
//   height: 250px;
//   background: ${(props) => props.isSidebarVisible ? 'red' : 'black'};
// `;

// const ComponentLevel2 = ({ isSidebarVisible }) => {
//   return (
//     <Wrapper isSidebarVisible={isSidebarVisible} />
//   );
// };

// const ComponentLevel1 = ({ isSidebarVisible }) => (
//   <ComponentLevel2 isSidebarVisible={isSidebarVisible}/>
// );

// const App = () => (
//   <ComponentLevel1 isSidebarVisible={true} />
// );

// export default App;
import React, { 
  useState, 
  useEffect,
  Fragment, 
} from 'react';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import GlobalStyle from './App.styles';
import routes from '../../routes';
import { 
  BrowserRouter, 
  Route, 
} from 'react-router-dom';

const BaseLayout = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  return (
    <Fragment>
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      {routes.map((route: any, index) => 
        <Route 
          key={index}
          path={route.path}
          render={props => 
            <route.component 
              {...props} 
              routes={route.routes} 
            />
          }
        />
      )}    
      <Footer /> 
    </Fragment>
  )
};

export default () => (
  <BrowserRouter>
    <GlobalStyle />
    <BaseLayout />
  </BrowserRouter>
);

// import React from 'react';

// export default () => (
//   <div style={{
//     height: '500px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '1px solid red',
//   }}>
//     <div style={{
//       border: '1px solid black',
//       width: '1000px',
//       textAlign: 'center'
//     }}>
//       text
//     </div>
//   </div>
// );
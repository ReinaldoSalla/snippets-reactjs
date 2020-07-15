// import React, { 
//   useState, 
//   Fragment, 
//   FunctionComponent 
// } from 'react';
// import { useSpring, animated, config } from 'react-spring';
// import GlobalStyle from './App-styles';
// import Topbar from './components/Topbar';
// import Sidebar from './components/Sidebar';

// interface TextProps {
//   isSidebarVisible: boolean
// }

// const Text: FunctionComponent<TextProps> = ({ isSidebarVisible }) => {
//   const textAnimation = useSpring({
//     // transform: isSidebarVisible ? 'translateX(30%)' : 'translateX(0%)'
//     config: config.slow,
//     marginLeft: isSidebarVisible ? '100%' : '0px'
//   });
//   return (
//     <animated.div style={textAnimation}>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      // <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
//     </animated.div>
//   );
// };

// const App: FunctionComponent = (): JSX.Element => {
//   const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
//   const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
//   return (
//     <Fragment>
//       <GlobalStyle />
//       <Topbar 
//         isSidebarVisible={isSidebarVisible} 
//         toggleSidebar={toggleSidebar}
//       />
//       <Sidebar isSidebarVisible={isSidebarVisible} />
//       <Text isSidebarVisible={isSidebarVisible} />
//     </Fragment>
//   );
// };

// export default App;

import React, { Fragment } from 'react';
import GlobalStyle from './App-styles';
// import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';

const App = () => (
  <Fragment>
      <GlobalStyle />
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
  </Fragment>
);

export default App;

//https://stackoverflow.com/questions/51731066/how-to-style-scrollbars-with-jss
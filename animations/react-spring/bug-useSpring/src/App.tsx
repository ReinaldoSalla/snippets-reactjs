import React, { 
  useState, 
  useEffect,
  Fragment, 
  FunctionComponent 
} from 'react';
import { useSpring, animated, config } from 'react-spring';
import GlobalStyle from './App-styles';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

interface TextProps {
  isSidebarVisible: boolean
}

const TextStyle = styled(animated.div)`
  color: purple;
  /* position: absolute; */
  transform: translateY(15%);
`;

const Text: FunctionComponent<TextProps> = ({ isSidebarVisible }) => {
  const textAnimation = useSpring({
    marginLeft: isSidebarVisible ? '250px' : '10px'
  });
  return (
    <TextStyle style={textAnimation}>
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
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
      <p>Concurrent Mode fixes this fundamental limitation by making rendering interruptible. This means when the user presses another key, React doesn’t need to block the browser from updating the text input. Instead, it can let the browser paint an update to the input, and then continue rendering the updated list in memory. When the rendering is finished, React updates the DOM, and changes are reflected on the screen.</p>
    </TextStyle>
  );
};

const App: FunctionComponent = (): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  useEffect(() => {
    const intervalId = setInterval(() => {
      toggleSidebar()
    }, 1500)
  });

  return (
    <Fragment>
      <GlobalStyle />
      <Topbar 
        isSidebarVisible={isSidebarVisible} 
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarVisible={isSidebarVisible} />
      {/* <Text isSidebarVisible={isSidebarVisible} /> */}
    </Fragment>
  );
};

export default App;

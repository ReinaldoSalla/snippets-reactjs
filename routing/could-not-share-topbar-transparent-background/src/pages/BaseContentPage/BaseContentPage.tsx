import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const TextWrapper = styled.div`
  margin: 0 20px;
  font-size: 1.1em;
  padding-top: 80px;
`;

const AnimatedTextWrapper = animated(TextWrapper);

const BaseContentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);    
  });
  const animation = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(-10%)'
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)'
    }
  });
  return (
    <AnimatedTextWrapper style={animation}>
      <h1> Suspense </h1>
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
    </AnimatedTextWrapper>
  );
};

export default BaseContentPage;
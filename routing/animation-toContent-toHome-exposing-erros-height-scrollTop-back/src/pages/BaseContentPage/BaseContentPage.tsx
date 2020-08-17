import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  margin: 20px;
  font-size: 1.1em;
  padding-top: 80px;
`;


const Divs = () => {
  // a bunch of divs 
  return (
    <Fragment>
      {Array(100).fill(0).map((_, index) =>
        <div key={index}>
          content #{index + 1}
        </div>
      )}
    </Fragment>
  );
};

const BaseContentPage = () => {
  useEffect(() => {
    
    // return () => window.scrollTo(0, 0);
  });
  return (
    <TextWrapper>
      <Divs />
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
    </TextWrapper>
  );
};

export default BaseContentPage;
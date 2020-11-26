import React, { useEffect } from 'react';

const windowWidthBeforeRender = document.body.offsetWidth;

const App = () => {
  
  useEffect(() => {
    const windowWidthAfterRender = document.body.offsetWidth;
    const scrollBarWidth = windowWidthBeforeRender - windowWidthAfterRender;
    console.log(scrollBarWidth);
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      app
    </div>
  );
};

export default App;
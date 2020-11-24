
import React, { useState } from 'react';
import './App.styles.css';

const computeBannerCN = (bool, placeholder, optional) => (
  bool ? `${placeholder} ${placeholder}--${optional}` : placeholder
);

const Banner = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);
  const bannerCN = computeBannerCN(isActive, 'banner', 'active');

  return (
    <div className={bannerCN}>
      <h1 className='banner__title'>
        this is a text inside an h1
      </h1>
      <button className='banner__button' onClick={toggle}>
        toggle
      </button>
    </div>
  );
};

const App = () => <Banner />;

export default App;
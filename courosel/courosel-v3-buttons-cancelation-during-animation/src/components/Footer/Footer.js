import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer'>
    <span className='footer-link'> Contact </span>
    <span className='footer-link'> Philosophy </span>
    <span className='footer-msg'>
      Copyright © {new Date().getFullYear()} JavaScriptTemporal
    </span>
    <span className='footer-msg'>
      All the code in this website in MIT licensed
    </span>
    <span className='footer-msg-italic'>
      Always bet on JS
    </span>
  </footer>
);

export default Footer;

import React, { Fragment } from "react";
import "./Footer.css";

const Footer = () => (
  <Fragment>
    <div className="footer-line" />
    <div className="footer-content">
      <div> 
        <a href="/#" target="_blank" className="footer-content-link">
          Sigma Technology 
        </a>
      </div>
      <div>
        <a href="/#" target="_blank" className="footer-content-link">
          Contact
        </a>
      </div>
      <div>
        <a href="/#" target="_blank" className="footer-content-link">
          Legal 
        </a>
      </div>
      <div className="footer-year">
        Copyright © {new Date().getFullYear()} Sigma
      </div>
    </div>
  </Fragment>
);

export default Footer;
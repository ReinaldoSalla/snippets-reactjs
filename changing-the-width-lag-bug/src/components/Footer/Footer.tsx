import React, { Fragment } from 'react';
import useHeight from '../../utils/useHeight';
import {
	FooterContentContainer,
	FooterContentLink,
	FooterMsg,
} from './Footer.styles';

const Footer = () => {
  const height = useHeight();
  return (
    <Fragment>
      <FooterContentContainer height={`${height-80}px`}>
        <FooterContentLink to="/contact"> Contact </FooterContentLink>
        <FooterContentLink to="/philosophy"> Philosophy </FooterContentLink>
        <FooterMsg>
          Copyright © {new Date().getFullYear()} JavaScriptTemporal
        </FooterMsg>
        <FooterMsg>
          All the code in this website is MIT licensed
        </FooterMsg>
        <FooterMsg className='js-msg'>Always bet on JS</FooterMsg>
      </FooterContentContainer>
    </Fragment>
  );
};

export default Footer;

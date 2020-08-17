import React, { Fragment } from 'react';
import { 
  FooterLineContainer,
  FooterContentContainer,
  FooterContentLink,
  FooterYear,
  FooterMsg
} from './Footer.styles';

const getRandomMsg = () => (
  Math.random() <= 0.5 
    ? 'Always bet on JS'
    : 'Everything that can be written in JavaScript, will be written in JavaScript'
);

const Footer = () => (
  <Fragment>
    <FooterLineContainer />
    <FooterContentContainer>
      <FooterContentLink to='/legal'> Legal </FooterContentLink>
      <FooterContentLink to='/philosophy'> Philosophy </FooterContentLink>
      <FooterContentLink to='/contact'> Contact </FooterContentLink>
      <FooterYear> 
        Copyright © {new Date().getFullYear()} abcde fghij 
      </FooterYear>
      <FooterMsg>
        {getRandomMsg()}
      </FooterMsg>
    </FooterContentContainer>
  </Fragment>
);

export default Footer;
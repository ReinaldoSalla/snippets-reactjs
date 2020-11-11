import React from 'react';
import { useSpring, config } from 'react-spring';
import {
  FooterWrapper,
  FooterContainer,
  FooterLink,
  FooterText
} from './Footer.styles';

const Footer = ({
  isSidebarVisible,
  closeSidebar
}) => {
  const spring = useSpring({
    config: config.molasses,
    from: { 
      opacity: isSidebarVisible ? 0.2 : 1
    },
    to: async (next) => {
      await next({
        opacity: isSidebarVisible ? 0.2 : 1
      });
    },
  });
  return (
    <FooterWrapper>
      <FooterContainer style={spring} onClick={closeSidebar}>
        <FooterLink to='/contact' $isSidebarVisible={isSidebarVisible}> Contact </FooterLink>
        <FooterLink to='/philosohpy' $isSidebarVisible={isSidebarVisible}> Philosophy </FooterLink>
        <FooterText>
          Copyright © {new Date().getFullYear()} JavaScriptTemporal
        </FooterText>
        <FooterText>
          All the code in this website in MIT licensed
        </FooterText>
        <FooterText italic>
          Always bet on JS
        </FooterText>        
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

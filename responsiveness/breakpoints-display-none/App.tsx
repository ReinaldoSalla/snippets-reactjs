import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './App.styles';

const generateMedia = (number: number): string => (
  `@media only screen and (max-width: ${number}px)`
);

const generalTheme = {
  breakpoints: {
    small: generateMedia(576),
    medium: generateMedia(768),
    large: generateMedia(1024),
    extraLarge: generateMedia(1200)
  }
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border: 1px solid black;

  ${props => props.theme.breakpoints.medium} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border: 1px solid black;

  ${props => props.theme.breakpoints.medium} {
    display: flex;
  }
`

const Button = styled.button`
  border: 1px solid black;
  height: 40px;
`;

const NavBar = () => (
  <Nav>
    <Button type='button'>btn1</Button>
    <Button type='button'>btn2</Button>
    <Button type='button'>btn3</Button>
    <Button type='button'>btn4</Button>
  </Nav>
);

const MobileNavbar = () => (
  <MobileNav>
    <Button type='button'>btn1</Button>
    <Button type='button'>btn2</Button>
  </MobileNav>
);

const App = () => (
  <ThemeProvider theme={generalTheme}>
    <GlobalStyle />
    <NavBar />
    <MobileNavbar />
  </ThemeProvider>
);

export default App;
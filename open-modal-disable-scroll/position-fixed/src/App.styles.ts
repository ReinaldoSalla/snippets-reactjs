import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root, footer {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    background: black;
    font-family: 'Source Sans Pro';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body::-webkit-scrollbar {
    width: 16px;
  }

  body::-webkit-scrollbar-track {
    background: black;
  }
  
  body::-webkit-scrollbar-thumb {
    background: gray;
  }

  ul, ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    font: inherit;
    background: none;
    color: inherit;
    border: none;
  }
`;

const generateMedia = (number: number): string => (
  `@media only screen and (max-width: ${number}px)`
);

const globalTheme = {
  breakpoints: {
    extraSmall: generateMedia(400),
    small: generateMedia(576),
    medium: generateMedia(768),
    large: generateMedia(1024),
    extraLarge: generateMedia(1200)
  },
  topbarHeight: '80px',
  topbarBgColor: '#280808',
  secondaryBgColor: '#392c2c',
  hoverColor: '#c41010',
  textColor: 'rgba(255, 255, 255, 0.85)',
  weakerTextColor: 'rgba(255, 255, 255, 0.7)',
  pageBgColor: '#0b0b0b',
  boxBgColor: '#272727',
};

export { GlobalStyle, globalTheme };
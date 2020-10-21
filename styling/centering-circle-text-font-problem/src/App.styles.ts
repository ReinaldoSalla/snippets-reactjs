import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root, footer {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    height: 500%;
    background: aliceBlue;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    extraSmall: generateMedia(330),
    small: generateMedia(576),
    medium: generateMedia(768),
    large: generateMedia(1024),
    extraLarge: generateMedia(1200)
  },
  topbarHeight: '80px'
};


export { GlobalStyle, globalTheme };
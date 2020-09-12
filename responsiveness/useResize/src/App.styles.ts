import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: aliceBlue;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif;
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

  p {
    /* margin: 0; */
    /* padding: 0; */
  }
`;

export default GlobalStyle;

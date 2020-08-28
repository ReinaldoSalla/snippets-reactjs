import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    /* height: 100%;
    width: 100%; */
    background: aliceBlue;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Source Sans Pro', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',  sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* overflow: hidden; */
  }

  /* Chrome scrollbar */
  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: white;
  }

  body::-webkit-scrollbar-thumb {
    background: rgba(200, 200, 200, 1);
  }

  :root {
    /* Firefox scrollbar (>= 64) */
    scrollbar-width: thin;
    /* height: 100%;
    width: 100%; */
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;


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
  }

  /* Chrome scrollbar */
  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  body::-webkit-scrollbar-thumb {
    background: gray;
  }

  :root {
    /* height: 100%;
    width: 100%; */
    /* Firefox scrollbar */
    scrollbar-width: thin !important;
    /* scrollbar-color: rgb(210,210,210) rgb(46,54,69) !important; */
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

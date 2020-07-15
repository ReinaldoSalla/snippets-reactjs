import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    /* height: 100%;
    width: 100%; */
    background: aliceBlue;
    font-family: sans-serif;
  }

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
    /* scrollbar-color: rgb(210,210,210) rgb(46,54,69) !important; */
    scrollbar-width: thin !important;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;


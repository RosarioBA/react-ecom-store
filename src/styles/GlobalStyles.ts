// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
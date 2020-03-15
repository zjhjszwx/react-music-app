import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  html, body, div, span {
    margin:0;
    padding:0;
    border:0;
    font-size:100;
    font:inherit;
    vertical-align:baseline;
  }
  html, body {
    background: #f2f3f4;
  }
  ol, ul {
    list-style:none;
  }
  a {
    text-decoration:none;
    color:#fff;
  }
`;

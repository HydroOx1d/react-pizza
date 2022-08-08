import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  body {
    font-family: "Roboto Flex", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #2c2c2c;
    background-color: #FFDF8C;
    padding: 43px 0;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <>
      <GlobalStyle/>
      <App />
    </>
);

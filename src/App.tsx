import { createGlobalStyle } from 'styled-components';
import React from 'react';

import normalize from 'styled-normalize';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  ${reset};
  html, body, body {
    min-height: 100%;
    width: 100%;
  }
  html, body {
    font-size: 16px;
    font-family: "Helvetica", "Georgia", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  input {
    max-width: 100%;
  }
`;

function App(): React.ReactElement {
  return (
    <>
      {/* The rest of your application */}
      <GlobalStyles />
      <h1>hello world</h1>
    </>
  );
}
export default App;

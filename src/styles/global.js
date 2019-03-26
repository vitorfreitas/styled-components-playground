import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    font-weight: 600;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Open Sans', Arial, sans-serif;
  }

  @media only screen and(max-width: 420px) {
    html {
      font-size: 50%;
    }
  }
`;

export default GlobalStyle;

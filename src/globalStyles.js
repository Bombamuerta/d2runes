import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media (max-width: 650px){
      font-size: 12px;
    }
  }

  body {
    background: #1a1a1d;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  input {
    outline: none;
    font-family: inherit;
    border: none;
  }

  button {
    outline: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
    font-size: inherit;
    border: 0;
  }
`

export default GlobalStyle

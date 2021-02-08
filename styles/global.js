import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html { 
    font-size: 62.5%; 
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
    color: #101b29;
    font-family: sans-serif;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #29d;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
`

export default GlobalStyle

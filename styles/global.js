import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.colors.secundary};
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  html { 
    font-size: 62.5%; 
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: radial-gradient(at 50% 100%, rgba(32,32,32,1), black);
    height: 100vh;
    width: 100vw;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }

  .container {
    overflow: hidden;

    height: 100vh;
    width: 100vw;
}
`

export default GlobalStyle

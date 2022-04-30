import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family.primary};
      background-color: ${theme.colors.gray[900]};
      background-image: url('/bg.png');
      background-size: 100%;
      background-position: 50% -160px;
      background-repeat: repeat-y;
      color: ${theme.colors.white[100]};
    }
  `}

`

export default GlobalStyles

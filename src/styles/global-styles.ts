import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
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
      background-color: ${theme.colors.dark[900]};
      background-image: url('/background.png');
      background-size: cover;
      background-attachment: fixed;
    }
  `}

`

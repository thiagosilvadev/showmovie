export const theme = {
  font: {
    family: {
      primary:
        "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secondary:
        "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    size: {
      huge: '6.4rem',
      xxlarge: '4.8rem',
      xlarge: '3.2rem',
      large: '2.4rem',
      medium: '2.0rem',
      small: '1.6rem',
      xsmall: '1.4rem',
      xxsmall: '1.2rem'
    },
    light: 300,
    normal: 400,
    bold: 600
  },

  colors: {
    primary: {
      50: '#FFECEC',
      100: '#FFDFDF',
      200: '#FFC0C0',
      300: '#FFA0A0',
      400: '#FF8181',
      500: '#FF6161',
      600: '#CC4E4E',
      700: '#993A3A',
      800: '#662727',
      900: '#331313'
    },
    dark: {
      50: '#EBEEF5',
      100: '#C3C8D4',
      200: '#A8AEBF',
      300: '#8E95A9',
      400: '#767E94',
      500: '#61697F',
      600: '#475069',
      700: '#323B54',
      800: '#20283E',
      900: '#121829'
    },
    white: '#fff',
    black: '#000'
  },
  container: {
    width: '1440px',
    gutter: '2.4rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  spacing: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  }
} as const

export type Theme = typeof theme

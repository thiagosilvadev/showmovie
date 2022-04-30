export default {
  grid: {
    container: '120rem',
    gutter: '2.4rem'
  },
  border: {
    radius: '1.4rem'
  },
  colors: {
    gray: {
      900: '#121829',
      800: '#20283E',
      700: '#323B54',
      600: '#475069',
      500: '#61697F',
      400: '#767E94',
      300: '#8E95A9',
      200: '#A8AEBF',
      100: '#C3C8D4',
      50: '#EBEEF5'
    },
    primary: {
      900: '#331313',
      800: '#662727',
      700: '#993A3A',
      600: '#CC4E4E',
      500: '#FF6161',
      400: '#FF8181',
      300: '#FFA0A0',
      200: '#FFC0C0',
      100: '#FFDFDF',
      50: '#FFECEC'
    },
    secondary: {
      400: '#FFBD6D'
    },
    purple: {
      900: '#241633',
      800: '#492C66',
      700: '#6D4199',
      600: '#9257CC',
      500: '#B66DFF',
      400: '#C58AFF',
      300: '#D3A7FF',
      200: '#E2C5FF',
      100: '#F0E2FF',
      50: '#F6EDFF'
    },
    black: {
      100: '#000000',
      75: 'rgba(0, 0, 0, 0.75)',
      65: 'rgba(0, 0, 0, 0.65)',
      50: 'rgba(0, 0, 0, 0.5)',
      40: 'rgba(0, 0, 0, 0.4)',
      30: 'rgba(0, 0, 0, 0.3)',
      20: 'rgba(0, 0, 0, 0.2)',
      10: 'rgba(0, 0, 0, 0.1)'
    },
    white: {
      100: '#FFFFFF',
      75: 'rgba(255, 255, 255, 0.75)',
      65: 'rgba(255, 255, 255, 0.65)',
      50: 'rgba(255, 255, 255, 0.5)',
      40: 'rgba(255, 255, 255, 0.4)',
      30: 'rgba(255, 255, 255, 0.3)',
      20: 'rgba(255, 255, 255, 0.2)',
      10: 'rgba(255, 255, 255, 0.1)'
    }
  },

  font: {
    family: {
      primary:
        "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secondary:
        "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },

    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.2rem',
      huge: '4.8rem',
      xhuge: '6.4rem'
    },
    letterSpacing: {
      _low: '-0.015em',
      _medium: '-0.02em',
      low: '0.02em',
      medium: '0.04em'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '6.4rem',
    xhuge: '8rem'
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
  }
} as const

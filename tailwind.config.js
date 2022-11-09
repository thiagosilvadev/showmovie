/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: [
        "'Raleway'",
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        "'Open Sans'",
        "'Helvetica Neue'",
        'sans-serif'
      ]
    },
    extend: {
      fontFamily: {
        secondary: [
          "'Poppins'",
          '-apple-system',
          'BlinkMacSystemFont',
          "'Segoe UI'",
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          "'Open Sans'",
          "'Helvetica Neue'",
          'sans-serif'
        ]
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
        }
      }
    }
  },
  plugins: []
}

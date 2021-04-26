module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        light: "#6663FF",
        purple: "#363687",
        dark: "#0E0D2A",
        "text-light": "#6F6F82",
      },
      fontFamily: {
        heading: "'Raleway', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

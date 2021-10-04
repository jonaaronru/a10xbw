const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'blackout': "#222222",
      'gravelflint': "#bbbbbb",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

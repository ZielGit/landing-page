/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    colors: {
      customBlue: '#1F336C', //bg-customBlue
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      '128': '32rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

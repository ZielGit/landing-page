/** @type {import('tailwindcss').Config} */ 
const colors = require('tailwindcss/colors')
delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*"
  ],
  theme: {
    colors: {
      customBlue: '#1F336C', //bg-customBlue
      ...colors
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

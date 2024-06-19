const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".app",
    ".components",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:true,
  theme: {
    extend: {
      colors:{
          aba:"#22d3ee",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      advanced:['Nunito']
    },
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
// setting the darkmode class
  darkMode: 'class'
  
}

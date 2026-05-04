const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aba: "#22d3ee",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
      advanced: ['Nunito'],
    },
    screens: {
      'xs': '450px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
  darkMode: 'class'
}

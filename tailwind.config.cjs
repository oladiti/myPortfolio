/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
        surface: {
          light: '#ffffff',
          dark: '#111113',
          darker: '#0a0a0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        signature: ['Great Vibes'],
      },
      screens: {
        'xs': '450px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
        'gradient-accent-hover': 'linear-gradient(135deg, #818cf8, #a78bfa, #22d3ee)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0b 0%, #111113 50%, #0a0a0b 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.2)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.1)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.3)',
        'card-dark-hover': '0 4px 12px rgba(0,0,0,0.3), 0 12px 28px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

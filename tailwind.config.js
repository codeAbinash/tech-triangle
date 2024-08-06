/** @type {import('tailwindcss').Config} */

const accent = '#8b5cf6'

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: accent,
        g2: '#3866D5',
        g1: '#8101E9',
      },
    },
  },
  plugins: [],
  accent,
}

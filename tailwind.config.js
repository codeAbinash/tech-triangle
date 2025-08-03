/** @type {import('tailwindcss').Config} */

const accent = '#3399ff'
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        accent: accent,
        g2: '#3866D5',
        g1: '#8101E9',
        appIconBg: '#191C21',
      },
    },
  },
  plugins: [],
  accent,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#744ce3',
        g2: '#3866D5',
        g1: '#8101E9',
      },
    },
  },
  plugins: [],
}

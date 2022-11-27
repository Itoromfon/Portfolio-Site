/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
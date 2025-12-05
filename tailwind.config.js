/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ff003c',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#2e2e2e',
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
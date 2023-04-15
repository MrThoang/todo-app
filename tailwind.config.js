/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#af2f2f26',
        'text-primary-color': '#b83f45'
      },
      boxShadow: {
        shadowPrimary: '[0 1px 1px rgba(0,0,0,0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0,0,0,0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2)]'
      }
    },
  },
  plugins: [],
}
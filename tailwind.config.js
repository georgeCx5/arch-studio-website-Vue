/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-very-dark-blue': 'rgb(27, 29, 35)',
        'neo-dark-grey': 'rgb(96, 99, 109)',
        'neo-medium-grey': 'rgb(125, 130, 143)',
        'neo-light-grey': 'rgb(200, 204, 216)',
        'neo-very-light-grey': 'rgb(238, 239, 244)',
        'neo-error-red': 'rgb(223, 86, 86)',
      },
      fontFamily: {
        'spartan': 'League Spartan',
      },
      screens: {
        'TB': '768px',
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}
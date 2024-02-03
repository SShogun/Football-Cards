/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '9xl': '0px 7px 9px 4px'
      },
      
    },
  },
  plugins: [],
}


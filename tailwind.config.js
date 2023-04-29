/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./style.css",
    "./main.js",
    "./screens/home.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icon: {
          100: '#27328E',
        },
        gary: {
          100: '#959595',
        },

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'font-medium': ['Inter', 'sans-serif', 'bold'],
      },
    },
  },
  plugins: [],
}


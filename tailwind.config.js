/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-bg' : '#735DA5',
        'custom-in' : '#D3C5E5',
      },
    },
  },
  plugins: [],
}


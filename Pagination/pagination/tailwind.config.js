/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('/src/assets/back.jpg')"
      },
      fontFamily: {
        'card': ['Inconsolata']
      }
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
}
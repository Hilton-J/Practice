
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
        'back': "url('/src/assets/back.jpg')",
        'custom-pattern': `
          /*Side Faces*/
          linear-gradient(30deg, #5ebb79 12%, transparent 12.5%, transparent 87%, #5ebb79 87.5%, #5ebb79),
          linear-gradient(150deg, #5ebb79 12%, transparent 12.5%, transparent 87%, #5ebb79 87.5%, #5ebb79),

          /*Top Faces*/
          linear-gradient(30deg, #5ebb79 12%, transparent 12.5%, transparent 87%, #5ebb79 87.5%, #5ebb79),
          linear-gradient(150deg, #5ebb79 12%, transparent 12.5%, transparent 87%, #5ebb79 87.5%, #5ebb79),

          /*Overlaying diagonal grid lines*/
          linear-gradient(60deg, rgba(94, 187, 121, 0.467) 25%, transparent 25.5%, transparent 75%, rgba(94, 187, 121, 0.467) 0, rgba(94, 187, 121, 0.467)),
          linear-gradient(60deg, rgba(94, 187, 121, 0.467) 25%, transparent 25.5%, transparent 75%, rgba(94, 187, 121, 0.467) 0, rgba(94, 187, 121, 0.467))
        `
      },
      fontFamily: {
        'card': ['Inconsolata'],
        'signature': ['Playwrite CU']
      },
      backgroundSize: {
        'custom-size': '74px 130px',
      },
      backgroundPosition: {
        'custom-position': '0 0, 0 0, 37px 65px, 37px 65px, 0 0, 37px 65px',
      },
      colors: {
        'custom-bg': '#454b69',
        'primary': '#4ade80',
        'secondary': '#42c773',
        'textPrimary': '#d0d2d5',
        'textSecondary': '#bbbdbf',
      },
      boxShadow: {
        'customHover': '-1px 3px 20px 6px rgba(66, 199, 115, 0.88)',
        'custom': '-1px 3px 31px -4px rgba(66,199,115,0.88)'
      }
    },
  },
  plugins: [
    'flowbite/plugin'
  ],
}
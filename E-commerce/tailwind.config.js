/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Uncut_sans_vf:['uncut-sans-vf'],
      },
      screens: {
        'custom-850': {'max': '850px'}, 
        'custom-1000': {'max': '1000px'},
        'custom-500': {'max': '500px'},
        'custom-943': {'max': '943px'},
        'custom-1380': {'max': '1380px'},
        'custom-700': {'max': '700px'},
        'custom-350': {'max': '350px'},
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar':{
          'display': 'none'
        },
        'no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width':'none'
        },
      };
      addUtilities(newUtilities)
    }
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      fontFamily: {
        'dancing': ["Dancing Script"],
      },
      backgroundImage: {'mybgColor': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,37,221,0.7932422969187676) 68%, rgba(0,212,255,1) 100%);',
        'mySidebarColor':'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(142,97,205,0.7008053221288515) 68%, rgba(0,212,255,1) 100%);',
        'myPlayerColor':'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,11,97,0.8688725490196079) 39%, rgba(0,212,255,1) 100%);',
        'myDisplaomecolor':'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,27,204,0.6195728291316527) 57%, rgba(0,212,255,1) 95%);'
      }

    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
        boxShadow: {
        '20xl': '0px 0px 180px 180px rgba(0, 0, 0, 0.3)',
        },
        screens: {
          'max-lg': '1115px',
          // => @media (min-width: 640px) { ... }
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          tangerine: ["Tangerine", "cursive"],
          carattere: ["Carattere", "sans-serif"],
          ShareTechMono: ["Share Tech Mono", "monospace"],
          sofia: ["Sofia", "cursive"],
          FiraMono: ["Fira Mono", "monospace"],
          
        },
        colors: {
          "primary": '#121212',
          "secondary": '#3AE180',
          "gray-light": '#7B7B7B',
          "body": '#B3E6FC10',
          "body-dark": '#B3E6FC60',
        }
      },
  },
  plugins: [],
}


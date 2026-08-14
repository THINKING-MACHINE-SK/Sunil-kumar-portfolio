/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#2a2a2a"
        },
        black: {
          DEFAULT: "#000",
          500: "#f0e6c8"
        },
        blue: {
          500: "#c9a84c"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(201,168,76,0.15)',
        gold: '0 0 20px rgba(201,168,76,0.4)',
      }
    },
  },
  plugins: [],
}

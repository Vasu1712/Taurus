/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      height: {
        "1/10": "10%",
        "9/10": "90%"
      },
      backgroundColor: {
        "app-black": "#121212",
        "app-voilet": "#8644F5",
      },
      colors: {
        voilet1: "#8644F5",
        baseblue: "#080129",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
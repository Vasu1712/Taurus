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
        "9/10": "90%",
        "1024": "1024px",
      },
      backgroundColor: {
        "app-black": "#121212",
        "app-voilet": "#8644F5",
        "app-blue": "#080129",
      },
      colors: {
        'voilet1': "#9d79fc",
        'voilet2': "#8140F3",
        'lavender': "#E9D9FC",
        'lightpurple': "#D6BDFF",
        'purple1': "#8644F5",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
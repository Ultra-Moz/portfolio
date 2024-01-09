/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrey: "#2d2e32",
        lightBlue: "#147efb",
        lightGrey: "#767676"
      },
      fontFamily:{
        poppins : ["Poppins", "sans-sarif"],
        mulish : ["Mulish", "sans-sarif"]
      }
    },
  },
  plugins: [],
}
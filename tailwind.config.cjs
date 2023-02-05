/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14213D",
        secondary: "#FCA311",
        terniary: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Lato"],
      },
    },
  },
  plugins: [],
};

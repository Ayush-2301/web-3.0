/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        navbar: "#0f0e13",
      },
      fontFamily: {
        poppins: "'Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [],
};

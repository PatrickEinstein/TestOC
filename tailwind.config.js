/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        uniqueWhite: "background: rgba(255, 255, 255, 1)",
        innerText: "rgba(225, 117, 37, 0.13)",
        submitBT: "rgba(251, 66, 144, 1)",
        login: " rgba(232, 36, 36, 1)",
        textcolor: "rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

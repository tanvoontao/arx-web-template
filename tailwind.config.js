/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'blue1': '#00A6F1',
        'blue2': '#007DD7',
        'blue3': '#005AC1',
        'blue4': '#003D95',
        'black1': "#000000",
        'gray1': "#E5E5E5",
        'white1': "#FFFFFF"
      },
    },
  },
  plugins: [],
}

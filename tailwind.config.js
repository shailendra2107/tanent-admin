/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-black': "#3f3f3f",
        'black-opacity': "rgba(63, 63, 63, 0.75)",
        "purple": "#1B52B1",
        "light-purple": "#f6f8fb",
        "dark-purple": "#05113E",
        "light-white": "rgba(255,255,255,0.17)",
        "dark": "#252733",
        "light": "#9FA2B4",
        "light-blue": "#0191D0",
        "lightGray": "#9E9A9A",
        "light-smoke": "#f5f5f5",
        "darkest-blue": "#223354",
        "green": "#3BB900",
        "light-green": "#ECFBE6",
        'dark_gray': "#9999",
        'darkest_gray': "rgba(34, 51, 84, .8)",
        "deep-gray": "rgba(34, 51, 84, 0.5)",
        "_gray": "#ddd",

      },
      boxShadow: {
        'purple': '0px 4px 9px rgba(2, 31, 140, 0.36)',
        'blue': '0px 2px 10px rgba(30, 144, 255, 0.5)',
        'light-purple': '0px 4px 12px rgba(55, 81, 255, 0.24)',
        'light-gray': '0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
      },
      fontSize: {
        "md": "16px"
      },
      outlineColor: {
        "dark-purple": "#05113E",
      },

      backgroundColor: {
        "green-linear": "#35CD3A",
      },
      backgroundImage: {
        "red-linear": "linear-gradient(180deg, #FFBF96 0%, #FE7096 100%)",

        "blue-linear": "linear-gradient(180deg, #90CAF9 0%, rgba(4, 126, 223, 0.9) 100%)",
        "orange-linear": "linear-gradient(180deg, #FFA100 0%, #FFC056 100%)"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fredoka", "sans-serif"],
      },
      colors: {
        "primary-brown": "#36190D",
        "secondary-gray": "#808080",
        "secondary-yellow": "#FFA72F",
        "secondary-black": "#3A3A3A",
        "third-brown": "#582B1C",
        "red-error": "#FF2530",
        "green-sucess": "#66B04C",
      },
      boxShadow: {
        "card-shadow": "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};

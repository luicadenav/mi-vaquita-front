/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
      },
      colors: {
        'primary-brown': '#36190D',
        'secondary-gray': '#808080',
        'secondary-yellow': '#FFA72F',
        'secondary-black': '#3A3A3A',
        'red-error': '#FF2530',
        'green-sucess': '#66B04C',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    'index.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      primary: {
        50: '#81D0D5',
        100: '#66C4CB',
        200: '#4EB9C0',
        300: '#38ADB6',
        400: '#24A2AB',
        500: '#1297A1',
        600: '#028C96',
        700: '#017E87',
        800: '#017078',
        900: '#016269',
      },
      down: {
        400: '#E0E0E0',
        600: '#A6A6A6',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

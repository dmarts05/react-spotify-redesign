/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {},
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
        'screen-small': [
          '100vh /* fallback for Opera, IE and etc. */',
          '100svh',
        ],
        'screen-large': [
          '100vh /* fallback for Opera, IE and etc. */',
          '100lvh',
        ],
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
};

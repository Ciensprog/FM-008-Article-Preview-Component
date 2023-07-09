const colors = {
  default: '#ECF2F8',
  grey: {
    'very-light': '#9DAEC2',
    light: '#6E8098',
    normal: '#48556A',
  },
}

/*
|-------------------------------------------------------------------------------
| Configuration
|-------------------------------------------------------------------------------
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}

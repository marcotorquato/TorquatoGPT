/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          700: '#40414F',
          800: '#343541',
          900: '#202123',
        },
        yellow: {
          700: '#fbe74d',
          800: '#f1de01',
        },
        blue: {
          700: '#3e65e6',
          800: '#90cbf9',
        },
      },
    },
  },
  plugins: [],
};

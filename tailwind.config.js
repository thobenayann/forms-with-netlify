/* import Tailwind default theme */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge : ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Myriad Pro', ...defaultTheme.fontFamily.serif],
        'raleway': ['Raleway', ...defaultTheme.fontFamily.serif]
       },
      height: {
        contactFormSection: '775px',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

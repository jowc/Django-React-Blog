module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        200: '550px'
       }
    },
  },
  variants: {
    extend: {
      appearance : ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}

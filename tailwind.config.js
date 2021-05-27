module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors:{
        'primary': '#2d3748',
        'accent': '#FF0066'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

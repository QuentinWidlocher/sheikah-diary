const path = require('path')
const tailwindColors = require('tailwindcss/colors')
const fromRoot = p => path.join(__dirname, p)

module.exports = {
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [fromRoot('./app/**/*.+(js|ts|tsx|mdx|md)')],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: tailwindColors.gray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

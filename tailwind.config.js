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
        base: {
          'DEFAULT': 'var(--base-0)',
          '50': 'var(--base-50)',
          '100': 'var(--base-100)',
          '200': 'var(--base-200)',
          '300': 'var(--base-300)',
          '400': 'var(--base-400)',
          '500': 'var(--base-500)',
          '600': 'var(--base-600)',
          '700': 'var(--base-700)',
          '800': 'var(--base-800)',
          '900': 'var(--base-900)',
        },
        primary: {
          '50': 'var(--primary-50)',
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

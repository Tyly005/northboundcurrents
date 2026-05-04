/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        north: {
          50: '#f3f8fc',
          100: '#dceaf4',
          200: '#bad3e5',
          300: '#8eb5d0',
          400: '#5f92bb',
          500: '#4878ad',
          600: '#356394',
          700: '#274c74',
          800: '#0d2d4c',
          900: '#08233c',
          950: '#06182b'
        },
        current: {
          500: '#789fbd',
          600: '#4c7ead'
        }
      },
      boxShadow: {
        soft: '0 18px 55px rgba(15, 46, 87, 0.12)',
        card: '0 12px 34px rgba(15, 46, 87, 0.08)'
      }
    }
  },
  plugins: []
};

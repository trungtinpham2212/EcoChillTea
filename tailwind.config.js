/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf7f0',
          100: '#faede0',
          200: '#f4d7b8',
          300: '#ecb885',
          400: '#e3924f',
          500: '#d97706',
          600: '#c0650c',
          700: '#9c4a0f',
          800: '#7c3a12',
          900: '#653115',
        },
        beige: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e6',
          300: '#f6e8d1',
          400: '#f0dab5',
          500: '#e8c896',
          600: '#deb577',
          700: '#d4a259',
          800: '#c98f3b',
          900: '#be7c1d',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

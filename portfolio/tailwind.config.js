/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // we'll toggle a 'dark' class on <html>
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6fbff',
          100: '#eaf7ff',
          500: '#2563eb'
        }
      }
    }
  },
  plugins: []
}

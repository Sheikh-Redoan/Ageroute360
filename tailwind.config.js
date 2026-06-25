/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: '#F5A623',
          dark: '#0D1B2A',
          navy: '#1A2E44',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(13,27,42,0.7), rgba(13,27,42,0.95))',
      }
    },
  },
  plugins: [],
}

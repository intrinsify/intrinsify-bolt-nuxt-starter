/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FEF9ED',  // Lightest
          100: '#FCF3DB',
          200: '#F9E4B7',
          300: '#F6D594',
          400: '#F4C771',
          500: '#F2BA4F', // Your base color
          600: '#C29540',
          700: '#917030',
          800: '#614C20',
          900: '#302610',  // Darkest
        }
      }
    },
  },
  plugins: [],
} 
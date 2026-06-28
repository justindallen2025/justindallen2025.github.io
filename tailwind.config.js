/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#e4e4e7',
      }
    },
  },
  plugins: [],
}

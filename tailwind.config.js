/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pr: {
          yellow: "#FFE03E",
          dark: "#0B1B2B",
          navy: "#0E273C",
          slate: "#2B3B4A",
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c454b",
        secondary: "#ffffff",
        accent: "#e0e0e0",
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e8eaec",
          300: "#dee2e6",
          400: "#cbd2d9",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
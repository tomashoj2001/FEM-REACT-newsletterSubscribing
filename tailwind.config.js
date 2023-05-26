/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "var(--dark-blue)",
        "bg-color": "var(--bg-color)",
        "tomato": "var(--tomato)",
        "grey": "var(--grey)"
      }
    },
  },
  plugins: [],
}


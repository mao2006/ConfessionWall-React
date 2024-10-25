/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100vh': '100vh',
        '60vh': '60vh'
      },
      width: {
        '75vw': '75vw',
        '60vw': '60vw'
      },
      spacing: {
        '15px': '15px',
        '60px': '60px',
        '75px': '75px'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          primary: '#A7C7E7',    // Soft blue
          secondary: '#F7CAC9',  // Soft pink
          accent: '#B5EAD7',     // Mint green
          yellow: '#FFF5BA',     // Pastel yellow
          purple: '#C3B1E1',     // Pastel purple
          background: '#FDF6F0', // Off-white/cream
          surface: '#FFFFFF',    // White
          gray: '#E2E2E2',       // Light gray
        },
      },
    },
  },
  plugins: [],
} 
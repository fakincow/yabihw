/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'yabisidebar': '#2E2F45',
      },
      backgroundImage: {
        'dashboard': "url('/assets/logo.png')"
      }
    },
  },
  plugins: [],
}

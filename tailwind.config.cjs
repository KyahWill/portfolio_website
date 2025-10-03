/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'cream': '#FAF8F5',
        'charcoal': '#111827',
        'stone': '#6B7280', // secondary text
        'accent': '#374151', // hover color
      }
    },
  },
  plugins: [
  ],
}

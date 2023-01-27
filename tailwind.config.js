/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow1': 'pulse 2.5s infinite',
        'pulse-slow2': 'pulse 3.75s infinite',
        'pulse-slow3': 'pulse 4.5s infinite',
        'pulse-slow4': 'pulse 5.7s infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

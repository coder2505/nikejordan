/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./tejas.html"],
  theme: {
    extend: {
      fontFamily: {
        'big-shoulders': ['"Big Shoulders Inline"', 'cursive'],
      },
    },
  },
  plugins: [],
}


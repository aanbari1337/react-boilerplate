/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "tailwind-blue": "#0f172a",
        "background-color": "#183250",
      },
    },
  },
  // ...
};

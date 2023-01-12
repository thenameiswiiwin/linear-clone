/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{tsx,jsx,js,ts}',
    './src/pages/**/*.{tsx,jsx,js,ts}',
    './src/components/**/*.{tsx,jsx,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      },
      colors: {
        background: '#000212',
      },
    },
  },
  plugins: [],
};

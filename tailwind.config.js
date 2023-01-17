/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{tsx,jsx,js,ts}',
    './src/pages/**/*.{tsx,jsx,js,ts}',
    './src/components/**/*.{tsx,jsx,js,ts}',
  ],
  theme: {
    animation: {
      'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
    },
    backgroundImage: {
      'hero-gradient':
        'radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15),transparent)',
      'page-gradient':
        'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120, 119, 198, 0.3), transparent)',
      'primary-gradient':
        'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
    },
    boxShadow: {
      primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
    },
    colors: {
      black: '#000212',
      gray: {
        100: 'rgba(255, 255, 255, 0.08)', // transparent white
        200: '#f7f8f8', // off white
        300: '#b4bcd0', // primary text
        400: '#858699', // grey
        500: '#222326', // grey dark
      },
      transparent: 'transparent',
      white: '#fff',
    },
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      xs: '1.3rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: ['2.2rem', '1.3'],
      '2xl': '2.4rem',
      '3xl': '2.6rem',
      '4xl': '3.2rem',
      '5xl': '4rem',
      '6xl': ['4.4rem', '1'],
      '7xl': ['4.8rem', '1'],
      '8xl': ['8rem', '1'],
    },
    keyframes: {
      'fade-in': {
        from: { opacity: 0, transform: 'translateY(-10px)' },
        to: { opacity: 1, transform: 'none' },
      },
    },
    spacing: {
      0: '0',
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2rem',
      6: '2.4rem',
      7: '2.8rem',
      8: '3.2rem',
      9: '3.6rem',
      10: '4rem',
      11: '4.4rem',
      12: '4.8rem',
      'nav-height': 'var(--nav-height)',
    },
    extend: {},
  },
  plugins: [],
};

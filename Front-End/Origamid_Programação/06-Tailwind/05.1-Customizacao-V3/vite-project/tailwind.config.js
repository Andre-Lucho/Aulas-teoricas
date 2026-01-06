/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        'text-shadow': {
          'text-shadow': '1px 1px currentCollor',
        },
      });
      addComponents({
        '.btn-ghost': {
          'border-radius': '20px',
          padding: '.5rem 1rem',
          opacity: '.2',
          border: '2px solid #ccc',
        },
      });
    }),
  ],
};

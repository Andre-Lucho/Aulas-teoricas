/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '481px',
        md: '769px',
        lg: '1025px',
      },
      colors: {
        'card-bg-light': '#ffffff',
        'card-border-light': '#333333',
        'card-border-dark': '#e0e0e0',
        'card-bg-caption': '#f2f2f2',
        'card-text-light': '#5a5a5a',
        'card-text-dark': '#f7f7f7',
        'card-caption-text-dark': '#1a1a1a',
        primary: '#c0392b',
        'primary-darker': '#9a2e22',
        'focus-ring': '#e74c3c',
        'light-background': '#dfdfdf',
        'light-text': '#1a1a1a',
        'light-border': '#333333',
        'light-skeleton-from': '#f0f0f0',
        'light-skeleton-via': '#e0e0e0',
        'light-skeleton-to': '#f0f0f0',
        'dark-background': '#151d28',
        'dark-text': '#f7f7f7',
        'dark-border': '#e0e0e0',
        'dark-skeleton-from': '#2a2a2a',
        'dark-skeleton-via': '#3a3a3a',
        'dark-skeleton-to': '#2a2a2a',
        'custom-gray': '#d4d4d4',
        'caption-bg': '#f2f2f2',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Lato', 'serif'],
      },
      boxShadow: {
        button: '0 3px 6px rgba(0, 0, 0, 0.3)',
        'button-hover': '0 4px 8px rgba(0, 0, 0, 0.2)',
        card: '0 4px 8px rgba(0, 0, 0, 0.5)',
        'card-hover': '4px 10px 12px rgba(0, 0, 0, 0.9)',
        'navbar-footer-light': '0 12px 15px rgba(0, 0, 0, 0.9)',
        'navbar-footer-dark': '2px 3px 4px rgba(223, 223, 223, 0.9)',
        'dark-card': '0px 4px 10px rgba(223, 223, 223, 0.5)',
        'dark-card-hover': '4px 6px 4px rgb(223, 223, 223, 0.9)',
      },
      borderRadius: {
        custom: '15px',
        DEFAULT: '6px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

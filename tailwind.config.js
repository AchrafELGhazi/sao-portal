/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        orange: {
          500: '#FF6600',
        },
        purple: {
          500: '#8B5CF6',
        },
        blue: {
          500: '#3B82F6',
        },
        green: {
          500: '#10B981',
        },
        pink: {
          500: '#EC4899',
        },
        yellow: {
          500: '#F59E0B',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};


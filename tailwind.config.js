/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 30s linear infinite',
        'spin-medium': 'spin-medium 25s linear infinite',
        'spin-fast': 'spin-fast 20s linear infinite',
      },
    },
  },
  plugins: [],
};
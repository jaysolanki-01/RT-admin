/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4d2e',
          dark: '#0f2d1a',
          light: '#2d6b45',
          50: '#f0f7f3',
          100: '#d6eade',
        },
        secondary: '#f5f0e8',
        gold: '#c3a268',
        charcoal: '#1a1a2e',
        'admin-bg': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

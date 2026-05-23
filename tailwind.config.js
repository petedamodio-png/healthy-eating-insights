/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#8FBF8A',
        'sage-dark': '#4A7A46',
        'sage-light': '#D6EDD4',
        'off-white': '#FAFAF8',
        'light-gray': '#F2F2EF',
        'border-gray': '#DDDDDA',
        'text-gray': '#6B6B6B',
        'near-black': '#1A1A1A',
        'warm-gold': '#C9A96E',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      borderRadius: {
        'pill': '24px',
        'card': '12px',
      }
    },
  },
  plugins: [],
}


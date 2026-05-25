/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          alt: 'var(--color-alt)',
          border: 'var(--color-border)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          sage: 'var(--color-sage)',
          'sage-dark': 'var(--color-sage-dark)',
          'sage-light': 'var(--color-sage-light)',
          gold: 'var(--color-gold)',
          dark: 'var(--color-dark)',
          nav: 'var(--color-nav-bg)',
        },
        'sage': 'var(--color-sage)',
        'sage-dark': 'var(--color-sage-dark)',
        'sage-light': 'var(--color-sage-light)',
        'off-white': 'var(--color-bg)',
        'light-gray': 'var(--color-alt)',
        'border-gray': 'var(--color-border)',
        'text-gray': 'var(--color-text-secondary)',
        'near-black': 'var(--color-text-primary)',
        'warm-gold': 'var(--color-gold)',
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

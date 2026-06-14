/** @type {import('tailwindcss').Config} */
// fonts: Playfair Display (display) + EB Garamond (body)
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        // Theme-aware semantic tokens (driven by CSS variables)
        canvas: 'var(--c-bg)',
        ink: 'var(--c-ink)',
        'ink-soft': 'var(--c-ink-soft)',
        'ink-mute': 'var(--c-muted)',
        'ink-faint': 'var(--c-muted-faint)',
        eyebrow: 'var(--c-eyebrow)',
        line: 'var(--c-border)',
        blush: {
          50:  '#FFF0F3',
          100: '#FFD6DF',
          200: '#FFB3C6',
          300: '#FF85A1',
          400: '#F4607F',
          500: '#E8436A',
        },
        gold: {
          300: '#E8C97A',
          400: '#D4A843',
          500: '#B8891E',
        },
        petal: {
          pink:   '#F9C4D2',
          rose:   '#E8A0B0',
          cream:  '#FDF0E0',
          green:  '#8BAF7C',
          darkgreen: '#5C7A4E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}

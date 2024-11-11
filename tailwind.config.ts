import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        },
        'earth': {
          100: '#f7ebe5',
          500: '#92400e',
          700: '#7c2d12'
        }
      }
    }
  },
  plugins: []
} satisfies Config
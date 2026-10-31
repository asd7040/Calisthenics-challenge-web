import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',
        surface: '#141416',
        raised: '#1C1C1F',
        line: '#2A2A2E',
        chalk: '#F4F3EF',
        muted: '#9B9BA1',
        brand: { DEFAULT: '#FF5B1F', soft: '#FF7A45', dark: '#D9440C' },
        volt: { DEFAULT: '#A3E635', dark: '#84CC16' },
        danger: '#F43F5E',
        warn: '#F59E0B',
      },
      fontFamily: {
        display: ['Cairo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans Arabic"', 'Cairo', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: { glow: '0 0 0 1px rgba(255,91,31,.35), 0 10px 40px -10px rgba(255,91,31,.45)' },
    },
  },
  plugins: [],
};
export default config;

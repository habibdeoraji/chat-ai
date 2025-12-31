/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors from Figma
        indigo: {
          50: '#EEF2FF',
          700: '#4338CA',
        },
        neutral: {
          50: '#FAFAFA',
          200: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          900: '#171717',
          950: '#0A0A0A',
        },
        gray: {
          50: '#F9FAFB',
        },
      },
      typography: {
        // Typography from design system
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
  },
  plugins: [],
}

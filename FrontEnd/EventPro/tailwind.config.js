/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', /* Theme color */
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87'
        },
        secondary: {
          50: '#f8fafc',
          100: '#f3f4f6',
          200: '#d1d2f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          750: '#242424', /* Bg color */
          800: '#1f2937',
          900: '#111827'
        },
        complement: {
          400: '#38bdf8',
          500: '#2563eb',
          800: '#1e40af'
        }
      }
    },
    screens: {
      xs: '250px',
      sm: '340px',
      md: '668px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fitgenie: {
          light: '#0a8296',     // Backgrounds, accents (teal/cyan)
          DEFAULT: '#0c9db0',   // Primary brand color (brighter teal)
          dark: '#064e5a',      // Headings, CTA backgrounds (dark teal)
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom right, #0a8296, #ffffff)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        fit: '0 4px 12px rgba(10, 130, 150, 0.25)',
      },
    },
  },
  plugins: [],
}

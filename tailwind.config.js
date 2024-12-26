/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'nav-gold': '#C4A962',
        'nav-dark': '#0A1624',
      },
      rotate: {
        'y-180': '180deg',
        '-y-180': '-180deg',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        '1000': '1000px',
      },
      scale: {
        '105': '1.05',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      animation: {
        'grid-line': 'grid-line 20s linear infinite',
        'feature-pulse': 'feature-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'grid-line': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50%)' },
        },
        'feature-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(196, 169, 98, 0.1)' },
          '50%': { boxShadow: '0 0 25px 0px rgba(196, 169, 98, 0.2)' },
        },
        spin: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'feature': '0 0 20px -5px rgba(196, 169, 98, 0.1)',
      },
    },
  },
  plugins: [],
}


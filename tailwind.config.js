/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        // Sky blue + amber from Circumference Calculator logo
        brand: {
          DEFAULT: '#F3FAFE',
          deep: '#0B1F33',
          soft: '#E8F6FC',
          glow: '#0EA5E9',
        },
        mist: '#DCEEF8',
        blush: '#FFF9EE',
        ink: '#0F2236',
        pink: {
          DEFAULT: '#0EA5E9',
          soft: '#38BDF8',
          deep: '#0284C7',
        },
        coral: {
          DEFAULT: '#F59E0B',
          deep: '#D97706',
        },
        violet: {
          DEFAULT: '#0EA5E9',
          soft: '#38BDF8',
          deep: '#0369A1',
        },
        lilac: '#7DD3FC',
        teal: {
          DEFAULT: '#0284C7',
          deep: '#0369A1',
        },
        sky: '#38BDF8',
        gold: '#F59E0B',
        primary: '#F3FAFE',
        secondary: '#E8F6FC',
        accent: '#0EA5E9',
        sunrise: '#F59E0B',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        orbit: 'orbit 18s linear infinite',
      },
    },
  },
  plugins: [],
}

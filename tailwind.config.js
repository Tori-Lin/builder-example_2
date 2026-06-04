/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gaming-dark': '#0a0e27',
        'gaming-darker': '#050814',
        'gaming-purple': '#8b5cf6',
        'gaming-cyan': '#06b6d4',
        'gaming-accent': '#ec4899',
      },
      backgroundImage: {
        'gradient-gaming': 'linear-gradient(135deg, #0a0e27 0%, #1a1f4b 100%)',
        'gradient-gaming-accent': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

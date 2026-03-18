/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spider-black': '#0a0a0a',
        'spider-dark': '#111111',
        'spider-red': '#ff1a1a',
        'spider-red-dark': '#b30000',
        'spider-red-glow': '#ff4444',
        'spider-gray': '#1a1a1a',
        'spider-card': '#0d0d0d',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #ff1a1a 0%, #b30000 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 26, 26, 0.5), 0 0 40px rgba(255, 26, 26, 0.2)',
        'red-glow-lg': '0 0 40px rgba(255, 26, 26, 0.7), 0 0 80px rgba(255, 26, 26, 0.3)',
        'red-glow-sm': '0 0 10px rgba(255, 26, 26, 0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.8)',
      },
      animation: {
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,26,26,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255,26,26,0.8), 0 0 60px rgba(255,26,26,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

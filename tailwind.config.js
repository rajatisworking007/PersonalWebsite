/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spider-black': '#000000',
        'spider-dark': '#0a0a0a',
        'spider-red': '#ffffff',
        'spider-red-dark': '#a3a3a3',
        'spider-red-glow': '#ffffff',
        'spider-gray': '#111111',
        'spider-card': '#0a0a0a',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
        'dark-gradient': 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.1)',
        'red-glow-lg': '0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(255, 255, 255, 0.2)',
        'red-glow-sm': '0 0 10px rgba(255, 255, 255, 0.3)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.2)' },
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

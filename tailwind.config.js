/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Night mode palette
        'cinema-black': '#05050a',
        'cinema-dark': '#0a0a12',
        'cinema-surface': '#10101a',
        'cinema-card': '#151520',
        // Accent colors
        'accent-red': '#e63946',
        'accent-hot': '#ff2d3b',
        'accent-crimson': '#9b1b30',
        'accent-ember': '#ff4d5a',
        'accent-violet': '#7c3aed',
        // Day mode
        'day-bg': '#f5f3f0',
        'day-surface': '#ffffff',
        'day-card': '#faf8f6',
        'day-text': '#1a1520',
        'day-muted': '#6b5f75',
      },
      fontFamily: {
        'heading': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #e63946 0%, #ff2d3b 50%, #ff4d5a 100%)',
        'violet-gradient': 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
        'hero-gradient': 'linear-gradient(135deg, #05050a 0%, #0a0a12 40%, #1a0a15 100%)',
        'section-gradient': 'linear-gradient(180deg, #05050a 0%, #0a0a12 50%, #10101a 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(230,57,70,0.06) 0%, transparent 50%)',
        'warm-radial': 'radial-gradient(ellipse at 50% 0%, rgba(230,57,70,0.10) 0%, transparent 60%)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(230, 57, 70, 0.3), 0 0 40px rgba(230, 57, 70, 0.1)',
        'red-glow-lg': '0 0 40px rgba(230, 57, 70, 0.4), 0 0 80px rgba(230, 57, 70, 0.15)',
        'red-glow-sm': '0 0 10px rgba(230, 57, 70, 0.25)',
        'violet-glow': '0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)',
        'card': '0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.6), 0 0 20px rgba(230,57,70,0.12)',
        'cinema': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-red': 'pulseRed 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(230, 57, 70, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 57, 70, 0.5), 0 0 60px rgba(230, 57, 70, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

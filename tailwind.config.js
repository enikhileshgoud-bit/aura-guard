export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#060911',
          900: '#0b1120',
          850: '#111927',
          800: '#18202f',
          700: '#2b3446',
          600: '#434e63',
          500: '#5c6679',
          400: '#7e879a',
          300: '#aeb6c4',
          200: '#d8dde6',
          100: '#e9edf3',
          50: '#f4f6fa',
        },
        safe: {
          600: '#0f8f5f',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
          200: '#a7f3d0',
          100: '#d1fae5',
          50: '#ecfdf5',
        },
        caution: {
          600: '#a8690a',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
          200: '#fde68a',
          100: '#fef3c7',
          50: '#fffbeb',
        },
        danger: {
          600: '#c02b23',
          500: '#ef4444',
          400: '#f87171',
          300: '#fca5a5',
          200: '#fecaca',
          100: '#fee2e2',
          50: '#fef2f2',
        },
        cyber: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#a855f7',
        }
      },
      boxShadow: {
        popup: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.45) inset, 0 12px 24px -8px rgba(0, 0, 0, 0.15)',
        'popup-dark': '0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12) inset, 0 12px 30px -4px rgba(0, 0, 0, 0.5)',
        'liquid-glow-safe': '0 0 35px -5px rgba(16, 185, 129, 0.4), 0 0 15px -3px rgba(16, 185, 129, 0.25)',
        'liquid-glow-caution': '0 0 35px -5px rgba(245, 158, 11, 0.4), 0 0 15px -3px rgba(245, 158, 11, 0.25)',
        'liquid-glow-danger': '0 0 35px -5px rgba(239, 68, 68, 0.45), 0 0 15px -3px rgba(239, 68, 68, 0.3)',
        'liquid-glow-scan': '0 0 35px -5px rgba(99, 102, 241, 0.45), 0 0 15px -3px rgba(6, 182, 212, 0.3)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.1)',
        'glass-inset-dark': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aurora-flow': 'aurora 18s ease infinite alternate',
        'radar-sweep': 'radarSweep 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'liquid-shimmer': 'liquidShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        aurora: {
          '0%': { transform: 'translate(0%, 0%) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(4%, 3%) rotate(45deg) scale(1.1)' },
          '100%': { transform: 'translate(-3%, 5%) rotate(90deg) scale(0.95)' },
        },
        liquidShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }
    },
  },
}

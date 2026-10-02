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
        dark: {
          bg: '#080C14',
          surface: '#0E1524',
          surfaceHover: '#141D30',
          elevated: '#1A243B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
        },
        cyan: {
          accent: '#06B6D4',
        },
        indigo: {
          accent: '#6366F1',
        },
        emerald: {
          accent: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(6, 182, 212, 0.2)',
        'cyan-glow-sm': '0 0 14px rgba(6, 182, 212, 0.15)',
        'emerald-glow-sm': '0 0 14px rgba(16, 185, 129, 0.2)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-card-hover': '0 12px 40px -10px rgba(6, 182, 212, 0.18)',
      }
    },
  },
  plugins: [],
}

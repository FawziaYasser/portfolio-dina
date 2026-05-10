/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          50: '#E6FAFF',
          100: '#BFF3FF',
          200: '#7FEAFF',
          300: '#45DFFF',
          400: '#17D0FF',
          500: '#00BFFF',
          600: '#009BFF',
          700: '#0073C7',
          800: '#00518D',
          900: '#083055'
        },
        ice: {
          50: '#F2FEFF',
          100: '#CCFBFF',
          200: '#99F6FF',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(0,191,255,.25), 0 0 80px rgba(0,191,255,.12)',
        soft: '0 10px 30px rgba(0,0,0,.35)'
      },
      keyframes: {
        pulseGlow: {
          '0%,100%': { filter: 'drop-shadow(0 0 0 rgba(0,191,255,0))' },
          '50%': { filter: 'drop-shadow(0 0 18px rgba(0,191,255,.55))' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gridShift: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-200px, 80px, 0)' }
        },
        circuitDraw: {
          '0%': { strokeDashoffset: 1200 },
          '100%': { strokeDashoffset: 0 }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        gridShift: 'gridShift 16s linear infinite',
        circuitDraw: 'circuitDraw 2.2s ease forwards'
      }
    }
  },
  plugins: []
}


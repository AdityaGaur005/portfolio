/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        white: '#1A1A1A', // Mapped to dark charcoal for text that used to be white
        black: '#FAF8F5', // Mapped to off-white
        gray: {
          200: '#2C2C2C', // Hover for dark buttons
          300: '#333333', // Body text
          400: '#555555', // Muted text
          500: '#777777', // More muted
        },
        dark: {
          900: '#FAF8F5',  // Main Background (Off-white / Alabaster)
          800: '#F5F5DC',  // Cards / Beige
          700: '#EAE6D4',
          600: '#D6D3D1',
        },
        accent: {
          300: '#D4B895',
          400: '#C5A880',
          500: '#A67C52', // Premium Bronze/Gold
          600: '#8A633E',
        },
        purple: {
          500: '#9E7A5A',
          600: '#806146',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

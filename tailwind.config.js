const { opacity } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'junious-headshot': "url('./photos/GwrwqDWr.jpeg')",
        'dancer-test': "url('./photos/people.jpg')"
        // 'headshot-junious': "url('./photos/headshot.jpeg')"
        // 'footer-texture': "url('/img/footer-texture.png')"

      }),
      colors: {
        richBlack: '#0F0F0F',
        daviesGrey: '#4E4E4E',
        transparent: 'transparent',
        current: 'currentColor',
        spanishGrey: '#9C9C9C',
        sonicSilver: '#707070',
        platinum: '#E6E6E6',
        indigoDye: '#25426B',
        yNBlue: '#314C7C',
        glaucous: '#6C8CC7',
        wildBlueYonder: '#9EB1D6',
        burlyWood: '#E2BC8A',
        earthYellow: '#D1A15D',
        fawn: '#D99F68',
        mediumCarmine: '#AA563B'

      },
      fontFamily: {
        poppins: ['Poppins'],
        nunito: ['Nunito'],
        allura: ['Allura']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeOut: {
          '100%': { opacity: '1', transform: 'translateX(0)' },
          '0%': { opacity: '0', transform: 'translateX(25%)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 1s',
        fadeOut: 'fadeOut 1s'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}

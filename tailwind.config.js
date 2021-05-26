module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'junious-headshot': "url('./photos/GwrwqDWr.jpeg')"
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

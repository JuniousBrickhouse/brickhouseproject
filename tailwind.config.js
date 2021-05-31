const { transitionDelay } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'junious-headshot': "url('./photos/GwrwqDWr.jpeg')",
        'dancer-test': "url('./photos/people.jpg')",
        crewLil: "url('./photos/CrewLil.jpeg')",
        crewVsan: "url('./photos/CrewVsan.jpeg')",
        'junious-blue': "url('./photos/JuniousBlue.jpeg')",
        'junious-crew': "url('./photos/JuniousCrew.jpeg')",
        'junious-down': "url('./photos/JuniousDownLook.jpeg')",
        'junious-grey': "url('./photos/JuniousGrey.jpeg')",
        'junious-noHat': "url('./photos/JuniousNoHat.jpeg')",
        'junious-redDance': "url('./photos/JuniousRedDance.jpeg')",
        'junious-white': "url('./photos/JuniousWhite.jpeg')",
        'junious-woods': "url('./photos/JuniousWoods.jpeg')",
        'junious-barn': "url('./photos/JuniousBarn.jpeg')",
        'urban-a': "url('./photos/UrbanA.jpeg')",
        '23Hampton': "url('./photos/logos/23Hampton.png')",
        nextLevel: "url('./photos/logos/nextLevel.png')",
        urbanArtistry: "url('./photos/logos/urbanArtistry.jpg')",
        'photo-edit': "url('./photos/PhotoEdit.png')",
        'final-photo': "url('./photos/FinalPhoto.png')"
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
        woodGray: '#E9EDF2',
        platinum: '#E6E6E6',
        indigoDye: '#25426B',
        yNBlue: '#314C7C',
        glaucous: '#6C8CC7',
        wildBlueYonder: '#9EB1D6',
        burlyWood: '#E2BC8A',
        earthYellow: '#D1A15D',
        fawn: '#D99F68',
        mediumCarmine: '#AA563B',
        redBackground: '#7C321A'

      },
      fontFamily: {
        poppins: ['Poppins'],
        nunito: ['Nunito'],
        allura: ['Allura']
      },
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms'
      },
      transitionDelay: {
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}

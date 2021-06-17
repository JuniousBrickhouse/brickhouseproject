const { transitionDelay } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'junious-headshot': "url('./components/photos/GwrwqDWr.jpeg')",
        crewLil: "url('./components/photos/CrewLil.jpeg')",
        crewVsan: "url('./components/photos/CrewVsan.jpeg')",
        'junious-blue': "url('./components/photos/JuniousBlue.jpeg')",
        'junious-crew': "url('./components/photos/JuniousCrew.jpeg')",
        'junious-down': "url('./components/photos/JuniousDownLook.jpeg')",
        'junious-grey': "url('./components/photos/JuniousGrey.jpeg')",
        'junious-noHat': "url('./components/photos/JuniousNoHat.jpeg')",
        'junious-redDance': "url('./components/photos/JuniousRedDance.jpeg')",
        'junious-white': "url('./components/photos/JuniousWhite.jpeg')",
        juniousSpiritual: "url('./components/photos/juniousSpiritual.jpg')",
        'junious-barn': "url('./components/photos/JuniousBarn.jpeg')",
        urbanA: "url('./components/photos/UrbanA.jpeg')",
        '23Hampton': "url('./components/photos/logos/23Hampton.png')",
        nextLevel: "url('./components/photos/logos/nextLevel.png')",
        urbanArtistry: "url('./components/photos/logos/urbanArtistry.jpg')",
        'photo-edit': "url('./components/photos/PhotoEdit.png')",
        'final-photo': "url('./components/photos/FinalPhoto.png')",
        '23Vertical': "url('./components/photos/logos/23Vertical.png')",
        '23Raw': "url('./components/photos/logos/23Raw.png')",
        assassinsDC2013: "url('./components/photos/assassinsDC2013.jpg')",
        lyndaBrickhouse: "url('./components/photos/lyndaBrickhouse.jpg')",
        juniousMountain: "url('./components/photos/juniousMountain.jpg')",
        assassinsJuniousPose: "url('./components/photos/assassinsJuniousPose.jpg')",
        assassinsLowView: "url('./components/photos/assassinsLowView.jpg')",
        dimg: "url('./components/photos/dimg.jpg')",
        djScotty: "url('./components/photos/djScotty.jpg')",
        eg12D1Zr: "url('./components/photos/eg12D1Zr.jpeg')",
        juniousWithWillietteHinton: "url('./components/photos/juniousWithWillietteHinton.jpg')",
        juniousBillUp: "url('./components/photos/juniousBillUp.jpg')",
        nubianClubCollaboration: "url('./components/photos/nubianClubCollaboration.jpeg')",
        philWigginsAndFriends: "url('./components/photos/philWigginsAndFriends.jpg')",
        ugPeople: "url('./components/photos/ugPeople.jpeg')"

      }),
      backgroundSize: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '95%': '95%',
        '100%': '100%',
        '125%': '125%',
        '150%': '150%',
        '200%': '200%',
        '250%': '250%',
        '300%': '300%'

      },
      scale: {
        60: '.6',
        70: '.7'
      },
      backgroundPosition: {
        'x-35%': '35%',
        'x-90%': '90%'
      },
      fontSize: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '150%': '150%',
        '200%': '200%',
        '250%': '250%',
        '300%': '300%'
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        richBlack: '#0F0F0F',
        daviesGrey: '#4E4E4E',
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
        redBackground: '#7C321A',
        spiritualRed: '#822838'

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
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'responsive']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ]
}

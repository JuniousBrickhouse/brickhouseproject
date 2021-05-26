module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'junious-headshot': "url('./photos/GwrwqDWr.jpeg')"
        // 'headshot-junious': "url('./photos/headshot.jpeg')"
        // 'footer-texture': "url('/img/footer-texture.png')"

      })
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

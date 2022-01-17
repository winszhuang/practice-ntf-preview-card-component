module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': {
        100: '#0d192b',
        200: '#14253d',
        300: '#2f415b'
      },
      'white': '#ffffff',
      'softBlue': '#8bacda',
      'cyan': '#00fff7'
    },
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

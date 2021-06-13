module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#19181d',
      'full-black': '#100F13',
      white: '#fff',
      gray: {
        900: '#1E1D23',
        700: '#333235',
        DEFAULT: '#8c8b8e',
      },
      purple: {
        500: '#6D07B0',
        DEFAULT: '#7209b7',
      },
      red: '#f72585',
      teal: {
        500: '#1de4fc',
        DEFAULT: '#52edff',
      },
      blue: '#4361ee',
      lilac: '#cc5de8',
      green: '#20c997',
      yellow: '#fcc419',
      orange: '#ff922b',
      pink: '#f06595',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

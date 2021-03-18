// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
    ],
  },
  theme: {
    extend: {
      fontSize: {
        '5xl' : '2.9rem',
        '4xl' : '2.3rem',
        '3xl' : '1.6rem',
        '2xl' : '1.3rem',
        'sm' : '0.87rem'
      },
      maxWidth: {
        'screen-2xl': '1400px',
        'screen-xl': '1150px',

      },
      colors: {
        white: {
          default: '#fff',
          '100': '#F7F6FA',
          '200': '#d4d4d4'
        },
        primary: {
          default: '#443E8A',
          dark: '#3F2E7F',
          light: '#705CA4'
        },
        secondary: {
          default: '#d63e99',
          dark: '#bf326c',
          light: '#d46ea8'
        },
        black: {
          default: '#3A3A3A',
          light: '#999999'
        },
        tertiary: {
          default: '#3ec8d6'
        }
      },
      boxShadow: {
        '2xl': '0 30px 60px rgba(0, 0, 0, 0.10)',
      },
    }
  },
};

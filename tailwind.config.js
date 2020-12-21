// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      },
      maxWidth: {
        'screen-2xl': '1500px',
      }
    }
  },
};

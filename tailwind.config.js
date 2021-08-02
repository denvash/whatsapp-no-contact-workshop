/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: [`Inter var`, ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
};

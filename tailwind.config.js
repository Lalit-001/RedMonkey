const colors = require("tailwindcss/colors");
module.exports = {
  content: ["src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(245,148,148)",
          default: "rgb(255,81,81)",
          dark: "rgb(248,47,47)",
        },
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
    },
  },
  plugins: [],
};

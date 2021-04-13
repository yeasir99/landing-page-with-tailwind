module.exports = {
  purge: ["/**/*.html", "/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandYellow: "var(--brand-yellow)",
        brandYellowLight: "var(--brand-yellow-light)",
        brandBlue: "var(--brand-blue)",
      },
      height: {
        custom: "var(--custom-height)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

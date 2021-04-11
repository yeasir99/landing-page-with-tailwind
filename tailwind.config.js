module.exports = {
  purge: ["/**/*.html", "/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        custom: "var(--custom-height)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

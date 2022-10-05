module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      spacing: {
        "m-5": "5px",
      },
      colors: {
        "pr-dark-purple": "#240D57",
        "light-pink": "#F6F2FF",
      },
      width: {
        400: "543.91px",
        500: "521px",
      },
      height: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

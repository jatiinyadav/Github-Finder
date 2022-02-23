module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
  plugins: [require('daisyui')],
}

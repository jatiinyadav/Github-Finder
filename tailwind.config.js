module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "synthwave", "cyberpunk", "valentine", "halloween", "luxury"]
  },
  plugins: [require('daisyui')],
}

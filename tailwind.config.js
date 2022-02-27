module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['open-sans', 'sans-serif']
      }
    },
  },
  daisyui: {
    themes: ["cupcake", "synthwave", "cyberpunk", "valentine", "halloween", "luxury"]
  },
  plugins: [require('daisyui')],
}

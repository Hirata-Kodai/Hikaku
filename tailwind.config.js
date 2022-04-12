module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: theme => ({
          'ramen-photo': "url('../images/background.jpg')",
        })},
  },
  plugins: [],
}

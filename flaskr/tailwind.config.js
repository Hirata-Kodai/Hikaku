module.exports = {
  content: [
    "./templates/**/*.{html,js}",
    "./static//**/*.{html,js}"],
    theme: {
      extend: {backgroundImage: theme => ({
            'ramen-photo': "url('../images/background.jpg')",
          })},
    },
  plugins: [],
}

module.exports = {
  plugins: [
    require('autoprefixer')({
      "browsers": [
        "iOS >= 8",
        "Firefox > 20",
        "Android > 4.4"
      ]
    })
  ]
};

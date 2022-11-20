const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      { test: /\.(png|jpg|svg|jpeg|gif)$/, type: "asset" }
    ]
  }
}
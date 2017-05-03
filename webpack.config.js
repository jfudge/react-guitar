const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "client-app.js"),
  output: {
    path: path.join(__dirname, "src", "public", "js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: path.join(__dirname, "src"),
      loader: 'babel-loader?-babelrc,+cacheDirectory,presets[]=es2015,presets[]=react',

    }
    ]

}};
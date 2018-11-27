const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = require("./webpack.common.js");

const config = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new OptimizeCssAssetsPlugin({})
  ]
});

// console.log(JSON.stringify(config, null, 2))
module.exports = config;

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    merry: "./lib/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "merry-ui"
    })
  ]
}
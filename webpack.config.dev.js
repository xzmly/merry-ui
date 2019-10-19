const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({},base,{
  mode: 'development',
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: "merry-ui",
      lang: 'zh-cmn-Hans',
      appMountId: "app"
    }),
    ...base.plugins
  ]
})
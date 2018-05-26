var path = require('path');
var webpack = require('webpack');
var Mix = require('laravel-mix').config;
var plugins = require('laravel-mix').plugins;


const webpackConfig = require('./node_modules/laravel-mix/setup/webpack.config')
const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [{ name: 'vux-ui' }]
})
module.exports.plugins = (module.exports.plugins || []).concat([
  new plugins.CopyWebpackPlugin([
      {from: 'resources/assets/img', to: 'images'},
  ]),
]);
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader' // <style lang="scss">
        }
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }
  ]
}
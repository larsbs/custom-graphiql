const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const webpackConfig = require('./webpack.config');


function resolve(...paths) {
  return path.resolve(__dirname, ...paths);
}


module.exports = Object.assign({}, webpackConfig, {
  resolve: {
    ...webpackConfig.resolve,
    modules: [ 'node_modules', resolve('dist') ],
  },
  output: {
    path: resolve('test', 'dist'),
    publicPath: '',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },
  entry: {
    'yagw-core': [
      '@babel/polyfill',
      './test/index.js',
    ],
  },
  plugins: [
    ...webpackConfig.plugins,
    new HtmlPlugin({
      filename: 'index.html',
      template: './test/index.html',
      inject: false,
    }),
  ]
});

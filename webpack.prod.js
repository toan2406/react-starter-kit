const merge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __SERVER__: false,
      __CLIENT__: true,
      __DEV__: false
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});

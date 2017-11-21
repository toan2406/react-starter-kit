const merge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
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
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CompressionPlugin({
      deleteOriginalAssets: false,
      test: /\.js$|\.css$/
    })
  ]
});

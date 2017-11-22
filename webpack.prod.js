const merge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
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
    new ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CompressionPlugin({
      deleteOriginalAssets: false,
      test: /\.js$|\.css$/
    })
  ]
});

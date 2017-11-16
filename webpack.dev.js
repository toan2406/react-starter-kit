const merge = require('webpack-merge');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  plugins: [
    new DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEV__: true
    })
  ]
});

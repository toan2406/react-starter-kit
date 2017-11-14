const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEV__: true
    })
  ]
};

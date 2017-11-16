const path = require('path');

module.exports = {
  entry: {
    app: './src/client/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    sourceMapFilename: '[file].map',
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
  }
};

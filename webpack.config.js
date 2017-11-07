const path = require('path');

module.exports = {
  entry: './src/components/App.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build')
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

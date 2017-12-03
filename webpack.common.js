const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const precacheConfig = require('./precache.config');

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
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]',
                camelCase: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build/public/*.@(js|css|svg)*']),
    new CommonsChunkPlugin({
      names: ['app'],
      children: true,
      async: 'commons',
      minChunks: 2
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new SWPrecacheWebpackPlugin(precacheConfig)
  ]
};

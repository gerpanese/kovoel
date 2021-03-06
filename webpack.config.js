// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  entry: ['babel-polyfill', `${path.resolve(__dirname, 'src')}/index.js`],
  module: {
    loaders: [
      {
        test: /\.(ttf|eot|svg|jpg|png)$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'file-loader',
        }],
      },
      {
        loaders: ['style-loader', 'css-loader'],
        test: /\.(css|png)$/,
      },
      {
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
      },
    ],
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  node: {
    fs: 'empty',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',
      '/auth': 'http://localhost:8000',
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'GoogleCloudTranslationApiKey',
    ]),
  ],
};

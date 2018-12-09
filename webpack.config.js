const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: 'style/app.css',
        to:   path.resolve(__dirname, 'dist/css')
      },
      {
        from: path.resolve(__dirname, 'node_modules/bpmn-js/assets/bpmn-font/css/'),
        to:   path.resolve(__dirname, 'dist/css')
      },
      {
        from: path.resolve(__dirname, 'node_modules/diagram-js/assets/'),
        to:   path.resolve(__dirname, 'dist/css')
      },
      {
        from: path.resolve(__dirname, 'node_modules/bpmn-js/assets/bpmn-font/font/'),
        to:   path.resolve(__dirname, 'dist/font')
      },
    ]),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "transform-loader?brfs"
      }
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 9000,
    publicPath: '/dist/',
    //hot: true
  },
};

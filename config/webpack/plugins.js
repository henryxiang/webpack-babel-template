const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'Webpack App',
  template: path.join(__dirname, '..', '..', 'src', 'index.html'),
  filename: path.join(__dirname, '..', '..', 'build', 'index.html')
});

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'styles.css',
  allChunks: true
});

const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['common', 'vendors'],
  filename: '[name].js'
});

const plugins = [
  htmlPlugin,
  extractTextPlugin,
  commonChunkPlugin,
];

module.exports = plugins;

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rules = [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader'],
      publicPath: '/build'
    }),
  },
  {
    test: /\.less$/,
    use: 'style-loader!css-loader!less-loader'
  },
  {
    test: /\.scss$/,
    use: 'style-loader!css-loader!sass-loader'
  },
  {
    test: /\.gif$/,
    use: 'url-loader?mimetype=image/gif'
  },
  {
    test: /\.png$/,
    use: 'url-loader?mimetype=image/png'
  },
  {
    test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
    use: 'url-loader?mimetype=application/font-woff'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
    use: 'url-loader?mimetype=application/font-[ext]'
  }
];

module.exports = rules;

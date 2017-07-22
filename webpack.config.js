const webpackConfig = require('./config/webpack');

const config = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: webpackConfig.rules,
  },
  plugins: webpackConfig.plugins,
};

const doConfig = (env) => {
  if (env.dev) {
    config.devtool = 'eval-source-map';
    config.devServer = {
      contentBase: __dirname + '/build',
      port: 8000,
      open: true,
      openPage: '',
      compress: true,
      stats: 'errors-only'
    };
  }
  return config;
};

module.exports = doConfig;

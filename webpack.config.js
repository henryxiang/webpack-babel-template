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
    require('./config/webpack/dev')(config);
  }
  return config;
};

module.exports = doConfig;

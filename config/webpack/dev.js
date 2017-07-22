const nconf = require('..');

const config = (webpackConfig) => {
  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.devServer = nconf.get('server');
};

module.exports = config;

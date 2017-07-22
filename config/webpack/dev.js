const config = (webpackConfig) => {
  webpackConfig.devtool = 'eval-source-map';
  webpackConfig.devServer = {
    contentBase: __dirname + '/build',
    port: 8000,
    open: true,
    openPage: '',
    compress: true,
    stats: 'errors-only'
  };
};

module.exports = config;

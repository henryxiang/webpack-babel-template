const nconf = require('nconf');
const path = require('path');

nconf.env().argv();

const environment = nconf.get('NODE_ENV') || 'dev';
const defaultConfig = path.join('.', 'default.json');
const envConfig = path.join('.', `${environment}.json`);

nconf.file(defaultConfig);
nconf.file(envConfig);

nconf.defaults({
  server: {
    contentBase: path.join(__dirname, '..', 'build'),
    port: 8000,
    open: true,
    openPage: '',
    compress: true,
    stats: 'errors-only',
  },
});

module.exports = nconf;

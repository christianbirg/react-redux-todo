require('babel-core/register');
require('babel-polyfill');


require.extensions['.css'] = function noop() {
  return null;
};

require.extensions['.jpg'] = function noop() {
  return null;
};

require.extensions['.png'] = function noop() {
  return null;
};

require.extensions['.svg'] = function noop() {
  return null;
};


require('./srv/index.js');

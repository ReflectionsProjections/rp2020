const routes = require('next-routes');

module.exports = routes()
  .add('index')
  .add('timeline')
  .add('speaker', '/speaker/:name');

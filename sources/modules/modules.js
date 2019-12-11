const healthCheckModule = require('./healthcheck/healthcheck.module.js');

module.exports = {
  setupRoutes
};

function setupRoutes(router) {
  healthCheckModule.setupRoutes(router);

}

const healthCheckModule = require('./healthcheck/healthcheck.module.js');
const destinationModule = require('./destination/destination.module.js');

module.exports = {
  setupRoutes
};

function setupRoutes(router) {
  healthCheckModule.setupRoutes(router);
  destinationModule.setupRoutes(router);
}

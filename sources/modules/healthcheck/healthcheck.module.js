const config = require('config');

module.exports = {
  setupRoutes
};

function setupRoutes(router) {
  /**
   * @api {get} /healthcheck Returns healthcheck information
   * @apiGroup healthcheck
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "env": "local",
   *   "name": "travel-guide-service",
   *   "status": "ok",
   *   "version": "1.0.0"
   * }
   */
  router.get(`/${config.name}/healthcheck`, getHealthcheck);
}

function getHealthcheck(ctx) {
  ctx.body = {
    status: 'ok',
    env: config.env,
    name: config.name,
    version: config.version
  };
  ctx.status = 200;
}


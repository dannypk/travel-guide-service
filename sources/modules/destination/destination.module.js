const config = require('config');
const destinationService = require('../../services/destination/destination.service');

module.exports = {
  setupRoutes
};

function setupRoutes(router) {
  /**
   * @api {get} /destination/available-accommodatin Get possible accomodations for the given destination
   * @apiGroup destination
   */
  router.get(`/${config.name}/destination/available-accommodation`, getAvailableAccommodation);
}

async function getAvailableAccommodation(ctx) {
  const { destination } = ctx.query;
  ctx.body = await destinationService.getAvailableAccommodation(destination, ctx.db);
  ctx.status = 200;
}

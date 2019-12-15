const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

function createTestServer(createRoutes) {
  const koaApp = new Koa();
  const router = new Router();
  
  createRoutes(router);
  
  koaApp.use(bodyParser());
  koaApp.use(router.routes());
  return koaApp.listen();
}

module.exports = {
  createTestServer
};

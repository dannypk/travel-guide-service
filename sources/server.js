const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const initDB = require('./db');

const logger = require('./logger/logger');
const { setupRoutes } = require('./modules/modules');

const PORT = process.env.PORT || 15700;
const bodyParserToUse = bodyParser({
  jsonLimit: '50mb'
});

initDB();

const router = new Router();
setupRoutes(router);

const app = new Koa();
app.use(cors());
app.use(bodyParserToUse);
app.use(router.routes());

const server = app.listen(PORT, () => logger.info(`Server Listening on port ${PORT}`));

const gracefulShutdown = () => {
  logger.info('Received kill signal, shutting down gracefully.');
  
  server.close(() => {
    logger.info('Closed out remaining connections.');
    process.exit();
  });
  
  // if after
  setTimeout(() => {
    logger.info('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 10 * 1000);
};

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);

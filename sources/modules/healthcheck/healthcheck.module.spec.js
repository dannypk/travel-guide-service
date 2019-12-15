const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const config = require('config');
const request = require('supertest');

const healthCheckModule = require('./healthcheck.module.js');

const koaTestHelper = require('../../helpers/koa-test.helper');

describe('health check module', () => {
  let server;
  
  beforeAll(() => {
    server = koaTestHelper.createTestServer(router => {
      healthCheckModule.setupRoutes(router);
    });
  });
  
  afterAll(() => server.close());
  
  it('should return the app name', async () => {
    const route = `/${config.name}/healthcheck`;
    const response = await request(server).get(route);
    
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toEqual(config.name);
  });
});

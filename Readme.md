# Travel Guide Service

The purpose of this service is to show a sample of my coding style.

This is the Service for [Travel Guide](https://github.com/dannypk/travel-guide)

### It uses:
* Koa
* Winston (for logging)
* Mongoose (connection to Atlas Cloud) + Mongoose Schema
* Jest for testing

### Hosting
 the server is being hosted in Heroku and can be accessed on the following links:
* [healthcheck sample](https://travel-guide-service.herokuapp.com/travel-guide-service/healthcheck)
* [available accommodations for a given destination](https://travel-guide-service.herokuapp.com/travel-guide-service/destination/available-accommodation?destination=Barcelona)

### TODOs:
* add eslint 
* add unit tests
* config apidoc to generate documentation for modules.
* create more functionality (create new endpoints, mongoose schema, add more logic).
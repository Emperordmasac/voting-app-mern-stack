const Express = require("express");

const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");
const setupRouter = require("./setup/router");

const app = Express();
setupMiddleware(app);

setupDatabase()
  .then((client) => {
    setupRouter(app, client);
    app.listen(5000, () => {
      console.log("sever is running on port 5000");
    });
  })
  .catch(console.error);

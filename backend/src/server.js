const Express = require("express");

const setupMiddleware = require("./setup/middleware");
const setupDatabase = require("./setup/database");
const setupRouter = require("./setup/router");

const app = Express();
setupMiddleware(app);

async function start() {
  const db = await setupDatabase();
  setupRouter(app, db);
  app.listen(5000, () => {
    console.log("sever is running on port 5000");
  });
}

start().catch(console.error);

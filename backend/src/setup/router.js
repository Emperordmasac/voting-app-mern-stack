const Router = require("express").Router;

const createPolls = require("../handlers/create-polls");

module.exports = (app, client) => {
  const router = new Router();

  router.post("/", createPolls(client));

  app.use(router);
};

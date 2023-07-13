const Router = require("express").Router;

const createPolls = require("../handlers/create-polls");
const createVotes = require("../handlers/create-votes");
const getPoll = require("../handlers/get-poll");

const createPollsValidator = require("../validators/create-polls");
const createVotesValidator = require("../validators/create-votes");

module.exports = (app, db) => {
  const router = new Router();

  router.post("/polls", createPollsValidator, createPolls(db));

  router.put("/polls/:poll", createVotesValidator, createVotes(db));

  router.get("/polls/:poll", getPoll(db));

  app.use(router);
};

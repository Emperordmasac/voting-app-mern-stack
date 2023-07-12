const Express = require("express");

const setupMiddleware = require("./setup/middleware");

const app = Express();
setupMiddleware(app);

app.listen(5000, () => {
  console.log("sever is running on port 5000");
});

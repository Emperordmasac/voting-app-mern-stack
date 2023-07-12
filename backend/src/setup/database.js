const MongoDB = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/voting-databse";

module.exports = () => {
  const client = new MongoDB.MongoClient(uri);

  return client.connect();
};

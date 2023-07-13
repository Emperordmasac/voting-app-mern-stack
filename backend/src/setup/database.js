const MongoDB = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/voting-databse";

module.exports = async () => {
  const client = new MongoDB.MongoClient(uri);

  await client.connect();

  return client.db();
};

module.exports = (client) => {
  console.log(client);
  return (req, res) => {
    res.json({
      message: "working 👍 ",
    });
  };
};

module.exports = (db) => {
  return async (req, res) => {
    const result = await db.collection("polls").updateOne(
      {
        _id: req.params.poll,
        "choices._id": req.body.choice,
      },
      {
        $inc: {
          "choices.$.count": 1,
        },
      }
    );

    return res.json({
      message: "Vote has been registered 👍 ",
    });
  };
};

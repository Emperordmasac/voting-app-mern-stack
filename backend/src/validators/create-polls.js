const { validateAll } = require("indicative/validator");

module.exports = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      title: "required",
      choices: "required|array|min:2",
      "choices.*": "required|string",
    });

    next();
  } catch (errors) {
    return res.status(422).json(errors);
  }
};

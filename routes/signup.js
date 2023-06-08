const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");

const { PASSWORD_REGEX } = require("../utils/constants");

const { registerUser } = require("../controllers/users");

router.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().pattern(PASSWORD_REGEX),
      name: Joi.string().required().min(2).max(30),
    }),
  }),
  registerUser
);

module.exports = router;

import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().trim().min(10).max(50).email().required(),
  password: Joi.string().trim().max(30).min(5).required(),
});

export { loginSchema };

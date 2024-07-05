import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .trim()
    .required()
    .messages({
      "string.email": "correo no valido",
      "any.required": "campo requerido",
      "string.empty": "el campo email no puede estar vacio",
    }),
  password: Joi.string().required().messages({
    "any.required": "campo requerido",
    "string.empty": "el campo contraseña no puede estar vacio",
  }),
});

export { loginSchema };

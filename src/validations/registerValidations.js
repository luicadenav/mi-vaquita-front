import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().trim().min(1).required().messages({
    "string.trim": "el campo nombre no puede estar vacio",
    "any.required": "campo requerido",
    "string.empty": "el campo nombre no puede estar vacio",
  }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .trim()
    .min(1)
    .max(50)
    .required()
    .messages({
      "string.min": "min 1 caracter",
      "string.max": " max 50 caracteres",
      "string.email": "correo no valido",
      "any.required": "campo requerido",
      "string.empty": "el campo email no puede estar vacio",
    }),
  password: Joi.string()
    .min(8)
    .regex(/[A-Z]/, "mayuscula")
    .regex(/[0-9]/, "número")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "caracter especial")
    .required()
    .messages({
      "string.min": "8 caracteres",
      "string.pattern.name": "menos 1 {#name}",
      "any.required": "campo requerido",
      "string.empty": "el campo contraseña no puede estar vacio",
    }),
  password2: Joi.string()
    .valid(Joi.ref("password"))
    .when("password", {
      is: Joi.exist(),
      then: Joi.required(),
    })
    .messages({
      "any.only": "Las contraseñas no coinciden",
      "any.required": "Confirmar contraseña es requerido",
      "string.empty": "el campo confirmar contraseña no puede estar vacio",
    }),
});

export { registerSchema };

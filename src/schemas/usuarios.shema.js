
const { Joi } = require('express-validation')
 

const loginValidation = {
    body: Joi.object({
      usuario: Joi.string()
        .required(),
      contrasenia: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    }),
  }


module.exports =  loginValidation;
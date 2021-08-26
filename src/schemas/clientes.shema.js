
const { Joi } = require('express-validation')
 

const createClienteValidation = {
    body: Joi.object({
      nombre: Joi.string()
        .required(),
      apellido_materno: Joi.string(),
      apellido_paterno: Joi.string()
        .required(),
      domicilio: Joi.string()
        .required(),

    }),
  }


module.exports =  createClienteValidation;

const { Joi } = require('express-validation')
 

const createCuentaValidation = {
    body: Joi.object({
      id_cliente: Joi.number()
        .required(),
      numero_cuenta: Joi.number()
        .required(),
      saldo: Joi.number()
        .required(),

    }),
  }


module.exports =  createCuentaValidation;
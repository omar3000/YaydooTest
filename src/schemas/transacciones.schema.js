
const { Joi } = require('express-validation')
 

const createTransaccionValidation = {
    body: Joi.object({
      id_cuenta_emisor: Joi.number()
        .required(),
      id_cuenta_receptor: Joi.number()
        .required(),
      cantidad: Joi.number()
        .required(),
    }),
  }

  const listTransaccionValidation = {
    params: Joi.object({
      id_cliente: Joi.number()
        .required(),
    }),
  }


module.exports = { createTransaccionValidation, listTransaccionValidation};
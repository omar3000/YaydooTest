
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

  const deleteClienteValidation = {
    params: Joi.object({
      id_cliente: Joi.number()
        .required(),
    }),
  }


module.exports =  {createClienteValidation, deleteClienteValidation } ;
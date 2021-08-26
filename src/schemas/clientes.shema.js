
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

    
  const listClienteValidation = {
    params: Joi.object({
      fecha_inicial: Joi.date()
        .required(),
      fecha_final: Joi.date()
        .required(),
    }),
  }

  


module.exports =  {createClienteValidation, deleteClienteValidation, listClienteValidation } ;
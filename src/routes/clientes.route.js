const clientesValidation = require("../schemas/clientes.shema.js");
const { validate } = require('express-validation');
const router = require('express').Router();
const clientes = require('../controllers/clientes.controller.js');  
const  verifyToken = require("../middlewares/auth");


module.exports = app => {


  router.post('/clientes/create', validate(clientesValidation.createClienteValidation), verifyToken,  clientes.create);

  router.put('/clientes/eliminar/:id_cliente', validate(clientesValidation.deleteClienteValidation), verifyToken,  clientes.eliminadoLogico);

  router.get('/clientes/list',verifyToken, clientes.list);


  app.use('/api', router);
}



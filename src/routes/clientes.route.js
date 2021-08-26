const clientesValidation = require("../schemas/clientes.shema.js");
const { validate } = require('express-validation');
const router = require('express').Router();
const clientes = require('../controllers/clientes.controller.js');  
const  verifyToken = require("../middlewares/auth");


module.exports = app => {


  router.post('/clientes/create', validate(clientesValidation), verifyToken,  clientes.create);



  app.use('/api', router);
}



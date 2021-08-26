const transaccionesValidation = require("../schemas/transacciones.schema");
const { validate } = require('express-validation');
const router = require('express').Router();
const transacciones = require('../controllers/transacciones.controller.js');  
const  verifyToken = require("../middlewares/auth");


module.exports = app => {


  router.post('/transacciones/create', validate(transaccionesValidation.createTransaccionValidation), verifyToken,  transacciones.create);

  router.get('/transacciones/list/:id_cliente/:fecha_inicial/:fecha_final',validate(transaccionesValidation.listTransaccionValidation),verifyToken, transacciones.list);


  app.use('/api', router);
}
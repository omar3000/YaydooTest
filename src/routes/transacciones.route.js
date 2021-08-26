const transaccionesValidation = require("../schemas/transacciones.shema.js");
const { validate } = require('express-validation');
const router = require('express').Router();
const transacciones = require('../controllers/transacciones.controller.js');  
const  verifyToken = require("../middlewares/auth");


module.exports = app => {


  router.post('/transacciones/create', validate(transaccionesValidation), verifyToken,  transacciones.create);

  router.get('/transacciones/list',verifyToken, transacciones.list);


  app.use('/api', router);
}
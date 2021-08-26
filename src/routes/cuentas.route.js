const cuentaValidation = require("../schemas/cuentas.shema.js");
const { validate } = require('express-validation');
const router = require('express').Router();
const cuentas = require('../controllers/cuentas.controller.js');  
const  verifyToken = require("../middlewares/auth");


module.exports = app => {


  router.post('/cuentas/create', validate(cuentaValidation), verifyToken,  cuentas.create);



  app.use('/api', router);
}
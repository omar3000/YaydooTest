
const loginValidation = require("../schemas/usuarios.shema");
const { validate } = require('express-validation');
const router = require('express').Router();
const login = require('../controllers/login.controller.js');
 

module.exports = app => {


  router.post('/login',validate(loginValidation), login.setToken);



  app.use('/api', router);
}


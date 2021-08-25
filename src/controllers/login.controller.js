const jwt = require('jsonwebtoken');

const db = require('../models');

const usuarios = db.usuarios;

const  config = require("../../config/key.config");




exports.setToken  = (req, res) => {


  usuarios.findOne({
    where: {usuario: req.body.usuario, contrasenia: req.body.contrasenia  }
  })
  .then (usuario => {

    const token = jwt.sign({
      usuario: usuario.dataValues.usuario,
      id: usuario.dataValues.id
    }, config.TOKEN_SECRET)

    res.status(200).send({status: 200, token: token });

  })
  .catch(err => {
    res.status(401).send({
      status: 401, message: 'Error al realizar login'
    });
  }); 

};




const db = require('../models');

const transaccion = db.transacciones;


module.exports  =  {


    create(req, res) {
        return transaccion
              .create ({
                    nombre: req.body.nombre,
                    apellido_paterno: req.body.apellido_paterno,
                    apellido_materno: req.body.apellido_materno,
                    domicilio: req.body.domicilio,
                    fecha_registro:  Date.now()
              })
              .then(transaccion => res.status(200).send({status: 200, transaccion: transaccion}))
              .catch(error => res.status(400).send({status: 401, message: error}))
    },

    list(req, res) {
        
        return transaccion.findAll({

        })
        .then(transaccion => res.status(200).send(transaccion))
        .catch(error => res.status(400).send( {status: 401, message: error}))
     },


};


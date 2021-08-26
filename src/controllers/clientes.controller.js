
const db = require('../models');

const cliente = db.clientes;




module.exports  =  {


    create(req, res) {
        return cliente
              .create ({
                    nombre: req.body.nombre,
                    apellido_paterno: req.body.apellido_paterno,
                    apellido_materno: req.body.apellido_materno,
                    domicilio: req.body.domicilio,
                    fecha_registro:  Date.now()
              })
              .then(cliente => res.status(200).send({status: 200, cliente: cliente}))
              .catch(error => res.status(400).send({status: 401, message: error}))
    }


};



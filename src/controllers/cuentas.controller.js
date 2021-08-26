
const db = require('../models');

const cuenta = db.cuentas;




module.exports  =  {


    create(req, res) {
        return cuenta
              .create ({
                    id_cliente: req.body.id_cliente,
                    numero_cuenta: req.body.numero_cuenta,
                    saldo: req.body.saldo,
                    fecha_registro:  Date.now()
              })
              .then(cuenta => res.status(200).send({status: 200, cuenta: cuenta}))
              .catch(error => res.status(400).send({status: 401, message: error}))
    }


};


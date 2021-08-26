
const db = require('../models');

const transaccion = db.transacciones;
const cuenta = db.cuentas;
const cliente = db.clientes
const { Op } = require("sequelize");

module.exports  =  {


    async create(req, res) {

        var cuenta_saldo = await cuenta.findOne({ 
            attributes: ['saldo'],
            where: {
                id: req.body.id_cuenta_emisor,
                activo: true,
                saldo: {
                    [Op.gte]: req.body.cantidad
                }
            }
        });

        if(cuenta_saldo != undefined){
            return transaccion
            .create ({
                id_cuenta_emisor: req.body.id_cuenta_emisor,
                id_cuenta_receptor: req.body.id_cuenta_receptor,
                cantidad: req.body.cantidad,
                fecha_registro:  Date.now()
            })
            .then(transaccion => res.status(200).send({status: 200, transaccion: transaccion}))
            .catch(error => res.status(400).send({status: 401, message: error}))

        }
        else{
            return  res.status(200).send({status: 200, message: 'Fondos insuficientes en la cuenta'});
        }


    },

    async list(req, res) {
        
            return cliente.findOne({ 
                include: [
                    {
                        model: cuenta,
                        as: 'cuenta',
                        include: [
                            {
                                model: transaccion,
                                as: 'transacciones'
                            },
                            {
                                model: transaccion,
                                as: 'id_cuenta_receptor_transacciones'
                            }
                            
                        ],
                        where: { 
                            activo: true
                        }
                    }
                ],

                where: { 
                    activo: true,
                    id: req.params.id_cliente
                }
            })
            .then(transaccion => res.status(200).send(transaccion))
            .catch(error => res.status(400).send( {status: 401, message: error}))




     },


};


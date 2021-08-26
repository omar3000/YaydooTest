
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

            const transaction = await db.sequelize.transaction();
            try{

                var saldo_receptor = await cuenta.findOne({ 
                    attributes: ['saldo'],
                    where: {
                        id: req.body.id_cuenta_receptor,
                        activo: true
                    }
                }, {transaction: transaction});
        

                await transaccion.create ({
                    id_cuenta_emisor: req.body.id_cuenta_emisor,
                    id_cuenta_receptor: req.body.id_cuenta_receptor,
                    cantidad: req.body.cantidad,
                    fecha_registro:  Date.now()
                }, {transaction: transaction});

                console.log( cuenta_saldo.dataValues.saldo);


                await cuenta.update({ saldo: cuenta_saldo.dataValues.saldo - req.body.cantidad },
                    {where: {
                          id: req.body.id_cuenta_emisor
                    }
                }, {transaction: transaction});

                await cuenta.update({ saldo: saldo_receptor.dataValues.saldo + req.body.cantidad},
                    {where: {
                      id: req.body.id_cuenta_receptor
                    }
                }, {transaction: transaction});
                
            
                await transaction.commit();

                return res.status(200).send({status: 200, message : "Transaccion realizada exitosamente"});


            }
            catch (error) {
                await transaction.rollback();

                return res.status(400).send( {status: 400, message: error})
          }



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
                                as: 'transacciones',
                                fecha_registro: {
                                    [Op.gte]: req.params.fecha_inicial,
                                    [Op.lte]: req.params.fecha_final,
                              }
                            },
                            {
                                model: transaccion,
                                as: 'id_cuenta_receptor_transacciones',
                                fecha_registro: {
                                    [Op.gte]: req.params.fecha_inicial,
                                    [Op.lte]: req.params.fecha_final,
                              }
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


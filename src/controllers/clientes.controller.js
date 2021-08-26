
const db = require('../models');

const cliente = db.clientes;
const cuenta = db.cuentas;

const { Op } = require("sequelize");


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
      },

      list(req, res) {

            return cliente.findAll({
                  include: [{
                        model: cuenta,
                        as: 'cuenta'
                  }],
                  where: {
                        activo: true,
                        fecha_registro: {
                              [Op.gte]: req.params.fecha_inicial,
                              [Op.lte]: req.params.fecha_final,
                        }

                  }
            })
            .then(cliente => res.status(200).send({status: 200, cliente: cliente}))
            .catch(error => res.status(400).send( {status: 401, message: error}))
     },

      async eliminadoLogico(req, res) { 
            const transaction = await db.sequelize.transaction();
            try{

                  await cuenta.update({ activo: false},
                        {where: {
                              id_cliente: req.params.id_cliente
                        }
                  }, {transaction: transaction});

                  await cliente.update({ activo: false},
                        {where: {
                              id: req.params.id_cliente
                        }
                  }, {transaction: transaction});

                 

                  await transaction.commit();

                  return res.status(200).send({status: 200, message : "Cliente eliminado exitosamente"});


            }
            catch (error) {
                  await transaction.rollback();

                  return res.status(400).send( {status: 400, message: error})
            }




}
     



};



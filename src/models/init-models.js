var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _cuentas = require("./cuentas");
var _transacciones = require("./transacciones");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var cuentas = _cuentas(sequelize, DataTypes);
  var transacciones = _transacciones(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  cuentas.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(cuentas, { as: "cuenta", foreignKey: "id_cliente"});
  transacciones.belongsTo(cuentas, { as: "id_cuenta_emisor_cuenta", foreignKey: "id_cuenta_emisor"});
  cuentas.hasMany(transacciones, { as: "transacciones", foreignKey: "id_cuenta_emisor"});
  transacciones.belongsTo(cuentas, { as: "id_cuenta_receptor_cuenta", foreignKey: "id_cuenta_receptor"});
  cuentas.hasMany(transacciones, { as: "id_cuenta_receptor_transacciones", foreignKey: "id_cuenta_receptor"});

  return {
    clientes,
    cuentas,
    transacciones,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

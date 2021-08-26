const Sequelize = require('sequelize');
const { transacciones } = require('.');
module.exports = function(sequelize, DataTypes) {
  const transaccion = sequelize.define('transacciones', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      autoIncrementIdentity: true,
      allowNull: false,
      primaryKey: true
    },
    id_cuenta_emisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cuentas',
        key: 'id'
      }
    },
    id_cuenta_receptor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cuentas',
        key: 'id'
      }
    },
    cantidad: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'transacciones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_transaccion",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  transaccion.associate = function(models) {
    transaccion.belongsTo(models.cuentas, { as: "id_cuenta_emisor_cuenta", foreignKey: "id_cuenta_emisor"});
    transaccion.belongsTo(models.cuentas, { as: "id_cuenta_receptor_cuenta", foreignKey: "id_cuenta_receptor"});

  };

  return transaccion;

};

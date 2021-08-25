const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transacciones', {
    id: {
      type: DataTypes.INTEGER,
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
};

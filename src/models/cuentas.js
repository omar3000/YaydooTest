const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const cuenta = sequelize.define('cuentas', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    numero_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saldo: {
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
    tableName: 'cuentas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_cuenta",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  cuenta.associate = function(models) {
    cuenta.belongsTo(models.clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
    cuenta.hasMany(models.transacciones, { as: "transacciones", foreignKey: "id_cuenta_emisor"});
    cuenta.hasMany(models.transacciones, { as: "id_cuenta_receptor_transacciones", foreignKey: "id_cuenta_receptor"});
  };

  return cuenta;
  

  
};

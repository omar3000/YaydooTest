const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const cliente = sequelize.define('clientes', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido_paterno: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido_materno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    domicilio: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clientes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_cliente",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  cliente.associate = function(models) {
    cliente.hasMany(models.cuentas, { as: "cuenta", foreignKey: "id_cliente"});
  };

  return cliente;
};

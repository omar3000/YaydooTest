const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    usuario: {
      type: DataTypes.STRING(46),
      allowNull: false
    },
    contrasenia: {
      type: DataTypes.UUID,
      allowNull: false
    },
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    activo: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_usuario",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

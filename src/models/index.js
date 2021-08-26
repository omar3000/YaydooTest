const dbConfig = require("../../config/db.config");
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;



// region:: REGISTRO

db.usuarios = require("./usuarios")(sequelize, Sequelize);
db.clientes = require("./clientes")(sequelize, Sequelize);
db.cuentas = require("./cuentas")(sequelize, Sequelize);
db.transacciones = require("./transacciones")(sequelize, Sequelize);


Object.keys(db).forEach(key => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});



module.exports = db ;

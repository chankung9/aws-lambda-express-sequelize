const { Sequelize, DataTypes } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize(
  process.env.DbName,
  process.env.username,
  process.env.password, {
  dialect: process.env.dialect,
  host: process.env.host,
  port: process.env.port,
});

const modelDefiners = [
  require('./models/txn.model'),
  // Add more models here...
  // require('./models/item'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize, DataTypes);
}

applyExtraSetup(sequelize);

module.exports = sequelize

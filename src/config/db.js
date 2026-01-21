const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "carpool",
  "postgres",
  "9302",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false
  }
);

module.exports = sequelize;

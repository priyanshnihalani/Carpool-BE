const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tech-carpool",
  "tehrover-carpool",
  "techrover@carpool#2026",
  {
    host: "44.238.229.98",
    dialect: "postgres",
    logging: false
  }
);

module.exports = sequelize;

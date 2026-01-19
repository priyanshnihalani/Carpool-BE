const { DataTypes } = require('sequelize')
const sequelize = require("../config/db");

const Car = sequelize.define("Car", {
  name: DataTypes.STRING,
  status: { type: DataTypes.ENUM("available", "maintenance", "unavailable"), defaultValue: "available" }
});

module.exports = Car
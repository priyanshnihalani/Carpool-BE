const { DataTypes } = require('sequelize')
const sequelize = require("../config/db");

const Car = sequelize.define("Car", {
  name: DataTypes.STRING,
  status: { type: DataTypes.ENUM("available", "maintenance", "unavailable"), defaultValue: "available" },
  carCompany: DataTypes.STRING,
  vehicleType: { type: DataTypes.ENUM("sedan", "suv", "hatchback"), defaultValue: "hatchback" },
  carModel: DataTypes.STRING,
  chassisNumber: DataTypes.STRING,
  carYear: DataTypes.INTEGER,
  carColor: DataTypes.STRING,
  carNumber: DataTypes.STRING,
  fuelType: { type: DataTypes.ENUM("petrol", "diesel", "ev", "cng", "hybrid"), defaultValue: "petrol" },
  isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
});

module.exports = Car
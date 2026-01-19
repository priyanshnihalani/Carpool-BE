const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Branch = sequelize.define("Branch", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.STRING
  }
});

module.exports = Branch;

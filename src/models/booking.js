const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Booking = sequelize.define("Booking", {
  startAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  purpose: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fromLocation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  toLocation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = Booking;

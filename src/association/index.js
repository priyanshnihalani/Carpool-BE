const sequelize = require("../config/db");

const User = require("./user");
const Booking = require("./booking");
const Car = require("./car");
const Branch = require("./branch");

// Associations
User.hasMany(Booking);
Booking.belongsTo(User);

Branch.hasMany(Car);
Car.belongsTo(Branch);

Car.hasMany(Booking);
Booking.belongsTo(Car);

Branch.hasMany(Booking);
Booking.belongsTo(Branch);

module.exports = {
  sequelize,
  User,
  Booking,
  Car,
  Branch,
};

const User = require("../models/user");

class UserRepo {
  create(data) {
    return User.create(data);
  }

  findAll() {
    return User.findAll({ where: { role: "user", isDeleted: false }, attributes: { exclude: ["password"] } });
  }

  findById(id) {
    return User.findOne({ where: { id, isDeleted: false }, attributes: { exclude: ["password"] } });
  }

  findByEmail(email) {
    return User.findOne({ where: { email, isDeleted: false } });
  }

  deleteById(id) {
    return User.update({ isDeleted: true }, { where: { id } });
  }

  update(id, data) {
    return User.update(data, { where: { id } });
  }
}

module.exports = new UserRepo();
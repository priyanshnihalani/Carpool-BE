const User = require("../models/user");

class UserRepo {
  create(data) {
    return User.create(data);
  }

  findAll() {
    return User.findAll({where: {role: "user"}, attributes: { exclude: ["password"] } });
  }

  findById(id) {
    return User.findByPk(id, { attributes: { exclude: ["password"] } });
  }

  findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  deleteById(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = new UserRepo();
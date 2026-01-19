const Car = require("../models/car");
const Branch = require("../models/branch");

class CarRepo {
  create(data) {
    return Car.create(data);
  }

  findByBranch(branchId) {
    return Car.findAll({
      where: { BranchId: branchId },
      include: [{ model: Branch, attributes: ["name"] }]
    });
  }

  findById(id) {
    return Car.findByPk(id);
  }

  updateStatus(id, status) {
    return Car.update(
      { status },
      { where: { id } }
    );
  }
}

module.exports = new CarRepo();
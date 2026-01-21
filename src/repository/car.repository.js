const Car = require("../models/car");
const Branch = require("../models/branch");

class CarRepo {
  create(data) {
    return Car.create(data);
  }

  findByBranch(branchId) {
    return Car.findAll({
      where: { BranchId: branchId, isDeleted: false },
      include: [{ model: Branch, attributes: ["name"] }]
    });
  }

  findById(id) {
    return Car.findOne({ where: { id, isDeleted: false } });
  }

  updateStatus(id, status) {
    return Car.update(
      { status },
      { where: { id } }
    );
  }

  update(id, data) {
    return Car.update(data, { where: { id } });
  }

  delete(id) {
    return Car.update({ isDeleted: true }, { where: { id } });
  }
}

module.exports = new CarRepo();
const Branch = require("../models/branch");
const Car = require("../models/car");

class BranchRepo {
  create(data) {
    return Branch.create(data);
  }

  findAll() {
    return Branch.findAll();
  }

  findWithCars(branchId) {
    return Branch.findByPk(branchId, {
      include: [
        {
          model: Car,
          attributes: ["id", "name", "status"]
        }
      ]
    });
  }
}

module.exports = new BranchRepo();

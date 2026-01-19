const branchRepo = require("../repository/branch.repository");

class BranchService {
  addBranch(name, location) {
    return branchRepo.create({ name, location });
  }

  getAllBranches() {
    return branchRepo.findAll();
  }

  getBranchWithCars(branchId) {
    return branchRepo.findWithCars(branchId);
  }
}

module.exports = new BranchService();

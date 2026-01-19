const carRepo = require("../repository/car.repository");

class CarService {
  async addCar(name, branchId) {
    return carRepo.create({ name, BranchId: branchId });
  }

  async getCarsByBranch(branchId) {
    return carRepo.findByBranch(branchId);
  }

  async changeStatus(carId, status) {
    const car = await carRepo.findById(carId);
    if (!car) throw new Error("Car not found");

    return carRepo.updateStatus(carId, status);
  }
}

module.exports = new CarService();

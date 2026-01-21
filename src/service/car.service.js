const carRepo = require("../repository/car.repository");

class CarService {
  async addCar(data) {
    return carRepo.create({ ...data, BranchId: data.branchId });
  }

  async getCarsByBranch(branchId) {
    return carRepo.findByBranch(branchId);
  }

  async changeStatus(carId, status) {
    const car = await carRepo.findById(carId);
    if (!car) throw new Error("Car not found");

    return carRepo.updateStatus(carId, status);
  }

  async updateCar(carId, data) {
    const car = await carRepo.findById(carId);
    if (!car) throw new Error("Car not found");
    return carRepo.update(carId, data);
  }

  async deleteCar(carId) {
    const car = await carRepo.findById(carId);
    if (!car) throw new Error("Car not found");
    return carRepo.delete(carId);
  }
}

module.exports = new CarService();

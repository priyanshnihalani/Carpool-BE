const carService = require("../service/car.service");

exports.createCar = async (req, res) => {
  try {
    const car = await carService.addCar(req.body);
    res.json({ success: true, car });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getCarsByBranch = async (req, res) => {
  try {
    const { branchId } = req.params;
    const cars = await carService.getCarsByBranch(branchId);
    res.json({ success: true, cars });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateCarStatus = async (req, res) => {
  try {
    const { carId } = req.params;
    const { status } = req.body;

    await carService.changeStatus(carId, status);
    res.json({ success: true, message: "Status updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
exports.updateCar = async (req, res) => {
  try {
    const { carId } = req.params;

    await carService.updateCar(carId, req.body);
    res.json({ success: true, message: "Car updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const { carId } = req.params;
    await carService.deleteCar(carId);
    res.json({ success: true, message: "Car deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

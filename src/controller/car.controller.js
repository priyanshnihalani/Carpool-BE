const carService = require("../service/car.service");

exports.createCar = async (req, res) => {
  try {
    const { name, branchId } = req.body;
    const car = await carService.addCar(name, branchId);
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

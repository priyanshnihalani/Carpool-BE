const router = require("express").Router();
const ctrl = require("../controller/car.controller");

// Admin
router.post("/create", ctrl.createCar);
router.put("/update/:carId", ctrl.updateCar);
router.put("/:carId/status", ctrl.updateCarStatus);
router.delete("/:carId", ctrl.deleteCar);

// User/Admin
router.get("/branch/:branchId", ctrl.getCarsByBranch);

module.exports = router;

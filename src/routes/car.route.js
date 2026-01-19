const router = require("express").Router();
const ctrl = require("../controller/car.controller");

// Admin
router.post("/create", ctrl.createCar);                     
router.put("/:carId/status", ctrl.updateCarStatus);   

// User/Admin
router.get("/branch/:branchId", ctrl.getCarsByBranch); 

module.exports = router;

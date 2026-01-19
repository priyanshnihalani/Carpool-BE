const router = require("express").Router();
const ctrl = require("../controller/branch.controller");

router.post("/create", ctrl.createBranch);

router.get("/get", ctrl.getBranches);
router.get("/:branchId/cars", ctrl.getBranchCars);

module.exports = router;

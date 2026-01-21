const router = require("express").Router();
const ctrl = require("../controller/user.controller");

router.post("/create", ctrl.createUser);
router.get("/get", ctrl.getUsers);
router.get("/get/:id", ctrl.getUser);
router.delete("/delete/:id", ctrl.deleteUser);
router.put("/update/:id", ctrl.updateUser);
router.post("/login", ctrl.login);

module.exports = router;

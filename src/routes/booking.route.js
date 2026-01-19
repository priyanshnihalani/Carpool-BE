const router = require("express").Router();
const ctrl = require("../controller/booking.controller");

router.get("/availability", ctrl.checkCarAvailability);
router.post("/create", ctrl.createBooking);
router.get("/all", ctrl.getAllBookings);

router.post("/check-multiple", ctrl.checkMultipleAvailability);

router.get("/user/:userId", ctrl.getUserBookings);

module.exports = router;

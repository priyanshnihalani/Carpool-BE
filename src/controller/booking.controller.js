const bookingService = require("../service/booking.service");

exports.checkCarAvailability = async (req, res) => {
  try {
    const { carId, startAt, endAt } = req.query;

    const result = await bookingService.checkAvailability(
      carId,
      startAt,
      endAt
    );

    res.json({
      success: true,
      ...result
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json({ success: true, bookings });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await bookingService.getBookingsByUser(userId);

    return res.json({ bookings });
  } catch (err) {
    return res.status(500).json({ message: "Failed to load user bookings" });
  }
}

exports.checkMultipleAvailability = async (req, res) => {
  try {
    const { carIds, startAt, endAt } = req.body;

    const result = await bookingService.checkMultipleCarsAvailability(
      carIds,
      startAt,
      endAt
    );

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: err.message || "Failed to check availability",
    });
  }
}

exports.createBooking = async (req, res) => {
  try {
    const booking = await bookingService.bookCar(req.body);
    res.json({ success: true, booking });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

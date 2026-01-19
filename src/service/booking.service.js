const bookingRepo = require("../repository/booking.repository");

class BookingService {
  async checkAvailability(carId, startAt, endAt) {
    return bookingRepo.getCarAvailability(carId, startAt, endAt);
  }

  async bookCar(payload) {
    const { CarId, startAt, endAt } = payload;

    const { status } = await bookingRepo.getCarAvailability(
      CarId,
      startAt,
      endAt,
    );

    if (status !== "available") {
      throw new Error(`Car is ${status} for the selected period`);
    }

    return bookingRepo.create(payload);
  }


  async getAllBookings() {
    return bookingRepo.findAll();
  }

  async getBookingsByUser(userId) {
    if (!userId) {
      throw new Error("UserId is required");
    }

    return bookingRepo.findByUser(userId);
  }

  async checkMultipleCarsAvailability(carIds, startAt, endAt) {
    if (!carIds || !Array.isArray(carIds) || carIds.length === 0) {
      throw new Error("carIds must be a non-empty array");
    }

    if (!startAt || !endAt) {
      throw new Error("startAt and endAt are required");
    }

    return bookingRepo.getMultipleCarsAvailability(carIds, startAt, endAt);
  }
}

module.exports = new BookingService();

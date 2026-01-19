const { Op } = require("sequelize");
const Booking = require("../models/booking");
const Car = require("../models/car");
const User = require("../models/user");
const Branch = require("../models/branch");

class BookingRepo {
  async getCarAvailability(carId, startAt, endAt) {
    const car = await Car.findByPk(carId);
    if (!car) return { status: "not_found" };

    if (car.status === "maintenance") {
      return { status: "maintenance" };
    }

    const conflict = await Booking.findOne({
      where: {
        CarId: carId,
        [Op.and]: [
          { startAt: { [Op.lt]: endAt } },
          { endAt: { [Op.gt]: startAt } }
        ]
      }
    });

    if (conflict) {
      return { status: "unavailable" };
    }

    return { status: "available" };
  }

  create(data) {
    return Booking.create(data);
  }

  findAll() {
    return Booking.findAll({
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Car, attributes: ["id", "name"] },
        { model: Branch, attributes: ["id", "name"] },
      ],
      order: [["startAt", "ASC"]],
    });
  }
  async getMultipleCarsAvailability(carIds, startAt, endAt) {
    const result = {};

    const cars = await Car.findAll({
      where: {
        id: { [Op.in]: carIds }
      }
    });

    const activeCarIds = [];

    for (const car of cars) {
      if (car.status === "maintenance") {
        result[car.id] = {
          status: "maintenance",
          busySlots: []
        };
      } else {
        activeCarIds.push(car.id);
      }
    }

    const conflicts = await Booking.findAll({
      where: {
        CarId: { [Op.in]: activeCarIds },
        [Op.and]: [
          { startAt: { [Op.lt]: endAt } },
          { endAt: { [Op.gt]: startAt } }
        ]
      },
      attributes: ["CarId", "startAt", "endAt"],
      order: [["startAt", "ASC"]]
    });

    // Group bookings by car
    const conflictMap = {};
    for (const b of conflicts) {
      if (!conflictMap[b.CarId]) {
        conflictMap[b.CarId] = [];
      }
      conflictMap[b.CarId].push({
        startAt: b.startAt,
        endAt: b.endAt
      });
    }

    for (const id of activeCarIds) {
      if (conflictMap[id]) {
        result[id] = {
          status: "unavailable",
          busySlots: conflictMap[id]
        };
      } else {
        result[id] = {
          status: "available",
          busySlots: []
        };
      }
    }

    return result;
  }

  async findByUser(userId) {
    return Booking.findAll({
      where: { UserId: userId },
      include: [
        { model: User, attributes: ["id", "name", "email"] },
        { model: Car, attributes: ["id", "name"] },
        { model: Branch, attributes: ["id", "name"] },
      ],
      order: [["startAt", "DESC"]],
    });
  }

}

module.exports = new BookingRepo();

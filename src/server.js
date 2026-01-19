const express = require("express");
const cors = require("cors");

const { sequelize } = require("./models");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/branches", require("./routes/branch.route"));
app.use("/api/cars", require("./routes/car.route"));
app.use("/api/bookings", require("./routes/booking.route"));
app.use("/api/users", require("./routes/user.route"));

sequelize.sync({ alter: true }).then(() => {
  app.listen(4000, () => console.log("Server running on 4000"));
});

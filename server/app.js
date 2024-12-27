const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookeParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require("./routes/maps.routes");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookeParser());

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/captains", captainRoutes);
app.use("/api/v1/maps", mapRoutes);

module.exports = app;

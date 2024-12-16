const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookeParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookeParser());

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/captains", captainRoutes);

module.exports = app;

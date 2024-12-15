const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookeParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookeParser());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", userRoutes);

module.exports = app;

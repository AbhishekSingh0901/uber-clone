const http = require("http");
const app = require("./app");
const connectDB = require("./db/db");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(PORT, () => {
  connectDB();
  console.log("server listening on port " + PORT);
});

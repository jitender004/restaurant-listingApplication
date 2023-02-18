const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const router = require("./src/routes");
// Connect Database
connectDB();

const app = express();

//set middlewares
app.use(cors());
app.use(express.json());
app.use("/api/restaurant", router);
//run server
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});

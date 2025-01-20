const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes");
const mongoConfig = require("./ConfigDB/mongoDB");

mongoConfig();
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is Runing ${port}...`);
});

const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes");

const app = express();
app.use(cors());
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is Runing ${port}...`);
});

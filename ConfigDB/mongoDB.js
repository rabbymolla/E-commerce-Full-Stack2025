const mongoose = require("mongoose");

const mongoConfig = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected!"));
};

module.exports = mongoConfig;

const userModle = require("../models/userSchema");

const validationUserName = async (userName) => {
  // Ensure the input username is in lowercase
  userName = userName.toLowerCase();

  let isUnique = false;
  do {
    // Check if the username already exists
    const existingUser = await userModle.findOne({ userName });
    if (existingUser) {
      // Append a random digit to make the username unique
      userName += (+new Date() * Math.random()).toString().substring(0, 1);
      userName = userName.toLowerCase(); // Ensure the new username is also in lowercase
    } else {
      isUnique = true;
    }
  } while (!isUnique);

  return userName;
};

module.exports = validationUserName;

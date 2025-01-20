var jwt = require("jsonwebtoken");

const jwToken = (user, expierdIn) => {
  return jwt.sign(user, process.env.SECRET_TOKEN, {
    expiresIn: expierdIn,
  });
};

module.exports = jwToken;

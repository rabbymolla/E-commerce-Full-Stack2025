const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
const validationEmail = require("../../helpers/validationEmail");
const validationName = require("../../helpers/validationName");
const sendVerifiedEmail = require("../../helpers/mailer");
const userModle = require("../../models/userSchema");
const validationUserName = require("../../helpers/validationUserName");

const userController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate input
    if (!email || !validationEmail(email)) {
      return res.status(400).json({ message: "Invalid Email Address!" });
    }
    if (!firstName || !validationName(firstName, 1, 15)) {
      return res
        .status(400)
        .json({ message: "First name should be between 1 and 15 characters!" });
    }
    if (!lastName || !validationName(lastName, 3, 15)) {
      return res
        .status(400)
        .json({ message: "Last name should be between 3 and 15 characters!" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password should be at least 8 characters!" });
    }

    // Check if user already exists
    const existingUser = await userModle.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email is already in use!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const tempUserName = firstName + lastName;
    let finalUser = await validationUserName(tempUserName);
    // Generate OTP
    const otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    // Save user
    const newUser = await userModle.create({
      firstName,
      lastName,
      userName: finalUser,
      email,
      password: hashedPassword,
      otp,
      //verified,
    });

    res.status(201).json({
      message: "User created successfully! Please verify your email.",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        userName: newUser.userName,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

module.exports = userController;

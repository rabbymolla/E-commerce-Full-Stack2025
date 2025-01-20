const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

// Define Address Schema
const addressSchema = new Schema({
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

// Define Order Schema
const orderSchema = new Schema({
  orderId: { type: String, required: true },
  orderDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
});
// Define User Schema
const userSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: {
      type: String,
      require: true,
      trim: true,
      unique: true,
      text: true,
      default: "",
    },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    otp: { type: String, default: null },
    password: { type: String, required: true, minlength: 8 },
    role: {
      type: String,
      enum: ["admin", "customer", "seller"],
      default: "customer",
    },
    profilePicture: { type: String, default: "" },
    dateOfBirth: { type: Date, default: "" },
    gender: {
      type: String,
      enum: ["male", "female", "other", ""],
      default: "",
    },
    verified: { type: Boolean, default: false },
    friends: [{ type: ObjectId, ref: "users", default: [] }],
    followers: [{ type: ObjectId, ref: "users", default: [] }],
    following: [{ type: ObjectId, ref: "users", default: [] }],
    requests: [{ type: ObjectId, ref: "users", default: [] }],
    searchHistory: [
      {
        user: { type: ObjectId, ref: "users" },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    savedPosts: [
      {
        post: { type: ObjectId, ref: "post" },
        savedAt: { type: Date, default: Date.now },
      },
    ],
    isActive: { type: Boolean, default: true },
    addresses: { type: [addressSchema], default: [] },
    phone: { type: String, match: /^\d{10,15}$/, default: "" },
    preferences: {
      newsletter: { type: Boolean, default: false },
      preferredLanguage: { type: String, default: "en" },
    },
    orderHistory: { type: [orderSchema], default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

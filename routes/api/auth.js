const express = require("express");
const userController = require("../../controllers/authentication/userController");
const router = express.Router();

router.post("/registation", userController);

module.exports = router;

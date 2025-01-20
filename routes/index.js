const express = require("express");
const router = express.Router();
const api = require("./api/index.js");

const url = process.env.BASE_API_URL;
router.use(url, api);

module.exports = router;

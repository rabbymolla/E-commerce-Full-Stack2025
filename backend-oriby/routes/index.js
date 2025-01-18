const express = require("express");
const router = express.Router();
const api = require("./api/index.js");
router.use(process.env.BASE_API_URL, api);

module.exports = router;

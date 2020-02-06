const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const authMiddleware = require("../middleware/auth");

const router = express.Router();
router.use(authMiddleware);

module.exports = app => app.use("/users", router);
